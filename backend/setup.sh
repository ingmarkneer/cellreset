#!/bin/bash

set -e

echo "🚀 cellRESET Backend - Quick Start"
echo "=================================="
echo ""

if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert."
    echo "Bitte installiere Node.js 20+:"
    echo ""
    echo "  macOS:   brew install node@20"
    echo "  Website: https://nodejs.org/"
    echo ""
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js Version zu alt ($(node -v)). Mindestens v18 erforderlich."
    exit 1
fi

echo "✅ Node.js $(node -v) gefunden"
echo ""

if ! command -v docker &> /dev/null; then
    echo "❌ Docker ist nicht installiert."
    echo "Bitte installiere Docker Desktop:"
    echo "  https://www.docker.com/products/docker-desktop/"
    echo ""
    exit 1
fi

echo "✅ Docker $(docker -v | cut -d' ' -f3 | sed 's/,//') gefunden"
echo ""

echo "📦 Dependencies installieren..."
npm install

if [ ! -f .env ]; then
    echo ""
    echo "⚙️  .env Datei erstellen..."
    cp env.example .env
    echo "✅ .env erstellt (bitte JWT_SECRET + ENCRYPTION_KEY anpassen!)"
    echo ""
fi

echo ""
echo "🐳 Docker-Container starten (PostgreSQL + Redis)..."
docker-compose up -d postgres redis

echo ""
echo "⏳ Warte 5 Sekunden auf Datenbank-Start..."
sleep 5

echo ""
echo "🗄️  Rollen-Seed (falls noch nicht vorhanden)..."
docker exec -i cellreset-postgres psql -U cellreset -d cellreset_db <<EOF
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

echo ""
echo "🎉 Setup abgeschlossen!"
echo ""
echo "Backend starten:"
echo "  npm run start:dev"
echo ""
echo "Backend läuft dann auf:"
echo "  API:     http://localhost:3000/api/v1"
echo "  Swagger: http://localhost:3000/api-docs"
echo ""
echo "Logs anzeigen:"
echo "  docker-compose logs -f"
echo ""
echo "Container stoppen:"
echo "  docker-compose down"
echo ""
