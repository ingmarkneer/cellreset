#!/bin/bash

# cellRESET - Start Script (Backend + Frontend)
# ==============================================

echo "🚀 Starte cellRESET..."
echo ""

# Prüfe ob in richtigem Verzeichnis
if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    echo "❌ Fehler: Bitte führe dieses Script im cellRESET Hauptverzeichnis aus"
    exit 1
fi

# Prüfe ob Docker läuft
if ! docker info &> /dev/null; then
    echo "⚠️  Docker läuft nicht. Starte Docker Desktop..."
    open -a Docker
    echo "Warte auf Docker..."
    until docker info &> /dev/null; do
        echo -n "."
        sleep 2
    done
    echo ""
    echo "✅ Docker läuft"
fi

# Starte Datenbank (falls nicht läuft)
echo "📦 Starte Datenbank..."
cd backend
docker-compose up -d postgres redis
cd ..

# Funktion zum Aufräumen bei Ctrl+C
cleanup() {
    echo ""
    echo "🛑 Stoppe Server..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup INT

# Starte Backend im Hintergrund
echo "🔧 Starte Backend..."
cd backend
npm run start:dev > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Warte kurz, damit Backend startet
sleep 5

# Starte Frontend im Hintergrund
echo "🎨 Starte Frontend..."
cd frontend
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

echo ""
echo "======================================"
echo "✅ cellRESET läuft!"
echo "======================================"
echo ""
echo "Frontend: http://localhost:3001"
echo "Backend:  http://localhost:3000/api/v1"
echo "Swagger:  http://localhost:3000/api-docs"
echo ""
echo "Logs:"
echo "  Backend:  tail -f backend.log"
echo "  Frontend: tail -f frontend.log"
echo ""
echo "Drücke Ctrl+C zum Stoppen"
echo ""

# Öffne Browser
sleep 3
open http://localhost:3001

# Warte auf Prozesse
wait $BACKEND_PID $FRONTEND_PID
