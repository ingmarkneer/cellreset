# cellRESET Backend API

Backend API für die cellRESET Mobile App (Stoffwechselprogramm).

## Tech Stack

- **Framework**: NestJS (Node.js + TypeScript)
- **Database**: PostgreSQL 15
- **ORM**: TypeORM
- **Cache**: Redis
- **Auth**: JWT (Passport)
- **Validation**: class-validator
- **API Docs**: Swagger/OpenAPI
- **Testing**: Jest

## Voraussetzungen

- Node.js 20+ (LTS)
- npm oder yarn
- Docker + Docker Compose (für lokale Datenbank)
- PostgreSQL 15+ (alternativ zu Docker)
- Redis (alternativ zu Docker)

## Installation

### 1. Node.js installieren

macOS (Homebrew):
```bash
brew install node@20
```

Oder über [nodejs.org](https://nodejs.org/)

### 2. Dependencies installieren

```bash
cd backend
npm install
```

### 3. Environment-Variablen

```bash
cp env.example .env
```

Dann `.env` anpassen (DB-Credentials, JWT-Secret, etc.)

### 4. Datenbank starten (Docker)

```bash
docker-compose up -d postgres redis
```

Oder manuell PostgreSQL + Redis installieren.

### 5. Datenbank-Schema erstellen

```bash
npm run typeorm -- migration:run
```

Falls keine Migrations vorhanden, wird TypeORM im Dev-Modus das Schema automatisch synchronisieren (`synchronize: true`).

**WICHTIG**: In Production `synchronize: false` setzen und Migrations verwenden.

### 6. Rollen-Seed (Initial)

Folgende Rollen müssen initial in die DB eingefügt werden:

```sql
INSERT INTO roles (id, name, permissions, created_at) VALUES
  (gen_random_uuid(), 'participant', '["read:content", "write:check_in", "read:recipes"]', NOW()),
  (gen_random_uuid(), 'coach', '["read:content", "read:participants", "write:message"]', NOW()),
  (gen_random_uuid(), 'moderator', '["read:testimonials", "write:moderation"]', NOW()),
  (gen_random_uuid(), 'admin', '["*"]', NOW());
```

Alternativ ein Seed-Script erstellen (TODO).

### 7. Backend starten

Development:
```bash
npm run start:dev
```

Production:
```bash
npm run build
npm run start:prod
```

Backend läuft auf: `http://localhost:3000/api/v1`  
Swagger Docs: `http://localhost:3000/api-docs`

## Projektstruktur

```
backend/
├── src/
│   ├── auth/                 # Auth-Modul (JWT, Register, Login)
│   │   ├── dto/
│   │   ├── guards/
│   │   ├── strategies/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── role.entity.ts
│   ├── users/                # User-Modul (Profile, CRUD)
│   │   ├── dto/
│   │   ├── user.entity.ts
│   │   ├── profile.entity.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── programs/             # Program-Modul (TODO)
│   ├── challenges/           # Challenge-Modul (TODO)
│   ├── content/              # Content-Modul (TODO)
│   ├── quizzes/              # Quiz-Modul (TODO)
│   ├── recipes/              # Rezept-Modul (TODO)
│   ├── testimonials/         # Testimonial-Modul (TODO)
│   ├── community/            # Community-Modul (TODO)
│   ├── notifications/        # Notification-Modul (TODO)
│   ├── common/               # Shared (Decorators, Guards, Filters)
│   ├── app.module.ts
│   └── main.ts
├── test/                     # E2E Tests
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## API-Endpunkte (MVP Sprint 1-2)

### Auth

- `POST /api/v1/auth/register` – Registrierung
- `POST /api/v1/auth/verify-email` – E-Mail-Verifizierung
- `POST /api/v1/auth/login` – Login
- `POST /api/v1/auth/forgot-password` – Passwort vergessen
- `POST /api/v1/auth/reset-password` – Passwort zurücksetzen

### Users

- `GET /api/v1/users/me` – Eigenes Profil abrufen (JWT required)
- `PUT /api/v1/users/me/profile` – Profil aktualisieren
- `DELETE /api/v1/users/me` – Account löschen (DSGVO)
- `GET /api/v1/users/me/export` – Daten exportieren (DSGVO)

## Testing

Unit Tests:
```bash
npm run test
```

E2E Tests:
```bash
npm run test:e2e
```

Coverage:
```bash
npm run test:cov
```

## Linting & Formatting

```bash
npm run lint
npm run format
```

## Docker

Komplettes Setup (Backend + Postgres + Redis):
```bash
docker-compose up
```

Nur DB:
```bash
docker-compose up postgres redis
```

## Security

- Passwörter: bcrypt (cost 12)
- JWT: 15 Min TTL (Access Token), 30 Tage (Refresh Token)
- HTTPS only in Production
- Rate-Limiting: 100 Requests/Minute pro User (Throttler)
- CORS: konfigurierbar via `.env`
- Sensitive Daten (health_data): verschlüsselt (AES-256) – TODO

## Deployment

- Docker Image bauen: `docker build -t cellreset-backend .`
- Push zu Registry (z.B. AWS ECR, Docker Hub)
- Deploy zu Kubernetes/ECS/DigitalOcean App Platform

## Roadmap

**Sprint 1-2** (Aktuell):
- ✅ Setup (NestJS, TypeORM, PostgreSQL, Docker)
- ✅ Auth-Modul (Register, Login, JWT, RBAC)
- ✅ User-Modul (Profile, DSGVO Export/Delete)

**Sprint 3-4**:
- Program-Modul (CRUD)
- Challenge-Engine (Template, Instance, Day-Plan-Generator)

**Sprint 5-6**:
- Check-in-Modul (Daily Check-in, Tracking, Streak)
- Notifications (Push-Setup)

**Sprint 7+**:
- Content, Quiz, Rezepte, Testimonials, Community

## Lizenz

UNLICENSED (Proprietary)

## Kontakt

cellRESET Team – [support@cellreset.com](mailto:support@cellreset.com)
