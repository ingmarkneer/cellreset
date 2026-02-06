#!/bin/bash

# cellRESET - Automatische Installation für macOS
# ==============================================

set -e

echo ""
echo "🚀 cellRESET - Automatische Installation"
echo "=========================================="
echo ""

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funktion für Fehler
error() {
    echo -e "${RED}❌ Fehler: $1${NC}"
    exit 1
}

# Funktion für Erfolg
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Funktion für Info
info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Funktion für Warnung
warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 1. Prüfe macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    error "Dieses Script funktioniert nur auf macOS"
fi

success "macOS erkannt"
echo ""

# 2. Prüfe/Installiere Homebrew
info "Prüfe Homebrew..."
if ! command -v brew &> /dev/null; then
    warning "Homebrew nicht gefunden. Installation wird gestartet..."
    echo ""
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Füge Homebrew zum PATH hinzu (für Apple Silicon)
    if [[ $(uname -m) == "arm64" ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
    
    success "Homebrew installiert"
else
    success "Homebrew bereits installiert"
fi
echo ""

# 3. Prüfe/Installiere Node.js
info "Prüfe Node.js..."
if ! command -v node &> /dev/null; then
    warning "Node.js nicht gefunden. Installation wird gestartet..."
    brew install node@20
    success "Node.js installiert"
else
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        warning "Node.js Version zu alt ($(node -v)). Aktualisiere..."
        brew upgrade node
    fi
    success "Node.js $(node -v) vorhanden"
fi
echo ""

# 4. Prüfe/Installiere Docker
info "Prüfe Docker..."
if ! command -v docker &> /dev/null; then
    warning "Docker nicht gefunden."
    echo ""
    echo "Docker Desktop muss manuell installiert werden:"
    echo "1. Öffne: https://www.docker.com/products/docker-desktop/"
    echo "2. Lade Docker Desktop für macOS herunter"
    echo "3. Installiere Docker Desktop"
    echo "4. Starte Docker Desktop"
    echo ""
    read -p "Drücke Enter, wenn Docker Desktop installiert und gestartet wurde..."
    
    # Warte bis Docker läuft
    info "Warte auf Docker..."
    until docker info &> /dev/null; do
        echo -n "."
        sleep 2
    done
    echo ""
    success "Docker läuft"
else
    success "Docker bereits installiert"
    
    # Prüfe ob Docker läuft
    if ! docker info &> /dev/null; then
        warning "Docker läuft nicht. Starte Docker Desktop und warte..."
        open -a Docker
        until docker info &> /dev/null; do
            echo -n "."
            sleep 2
        done
        echo ""
        success "Docker läuft"
    fi
fi
echo ""

# 5. Backend Setup
info "Richte Backend ein..."
cd backend

# Installiere Dependencies
if [ ! -d "node_modules" ]; then
    info "Installiere Backend-Dependencies..."
    npm install
    success "Backend-Dependencies installiert"
else
    success "Backend-Dependencies bereits vorhanden"
fi

# Erstelle .env falls nicht vorhanden
if [ ! -f ".env" ]; then
    info "Erstelle .env Datei..."
    cp env.example .env
    
    # Generiere sicheren JWT_SECRET
    JWT_SECRET=$(openssl rand -base64 32)
    ENCRYPTION_KEY=$(openssl rand -base64 32)
    
    # Ersetze Platzhalter in .env
    sed -i '' "s/your_jwt_secret_here_change_in_production/$JWT_SECRET/" .env
    sed -i '' "s/your_32_char_encryption_key_here/$ENCRYPTION_KEY/" .env
    
    success ".env Datei erstellt mit sicheren Keys"
else
    success ".env bereits vorhanden"
fi

# Starte Datenbank
info "Starte PostgreSQL + Redis..."
docker-compose up -d postgres redis

# Warte auf Datenbank
info "Warte auf Datenbank-Start..."
sleep 8

# Seed Rollen
info "Erstelle Rollen in Datenbank..."
docker exec -i cellreset-postgres psql -U cellreset -d cellreset_db <<EOF > /dev/null 2>&1 || true
INSERT INTO roles (id, name, permissions, created_at)
SELECT 
  gen_random_uuid(),
  role_name,
  permissions::jsonb,
  NOW()
FROM (VALUES
  ('participant', '["read:content", "write:check_in", "read:recipes"]'),
  ('coach', '["read:content", "read:participants", "write:message"]'),
  ('moderator', '["read:testimonials", "write:moderation"]'),
  ('admin', '["*"]')
) AS roles(role_name, permissions)
WHERE NOT EXISTS (
  SELECT 1 FROM roles WHERE name = role_name
);
EOF

success "Backend Setup abgeschlossen"
echo ""

# 6. Frontend Setup
info "Richte Frontend ein..."
cd ../frontend

if [ ! -d "node_modules" ]; then
    info "Installiere Frontend-Dependencies..."
    npm install
    success "Frontend-Dependencies installiert"
else
    success "Frontend-Dependencies bereits vorhanden"
fi

cd ..

success "Frontend Setup abgeschlossen"
echo ""

# 7. Zusammenfassung
echo ""
echo "======================================"
echo -e "${GREEN}🎉 Installation erfolgreich!${NC}"
echo "======================================"
echo ""
echo "Backend starten:"
echo -e "  ${BLUE}cd backend && npm run start:dev${NC}"
echo ""
echo "Frontend starten (neues Terminal):"
echo -e "  ${BLUE}cd frontend && npm run dev${NC}"
echo ""
echo "Dann öffne im Browser:"
echo -e "  Frontend: ${GREEN}http://localhost:3001${NC}"
echo -e "  Backend:  ${GREEN}http://localhost:3000/api/v1${NC}"
echo -e "  Swagger:  ${GREEN}http://localhost:3000/api-docs${NC}"
echo ""
echo "Schnellstart:"
echo -e "  ${BLUE}./start.sh${NC}  (startet Backend + Frontend gleichzeitig)"
echo ""
