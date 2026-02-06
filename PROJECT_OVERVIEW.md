# cellRESET Web-App – Projektübersicht

## Status: Sprint 1-2 (Foundation + Auth + Frontend) – Fertig ✅

### Was wurde implementiert?

**Backend (NestJS + TypeScript + PostgreSQL)**:

1. **Projektstruktur**
   - NestJS-Projekt mit modularer Architektur
   - TypeScript, ESLint, Prettier konfiguriert
   - Docker Compose (PostgreSQL + Redis + Backend)
   - Swagger API-Dokumentation

2. **Auth-Modul (MVP Sprint 1-2)** ✅
   - Registrierung (E-Mail + Passwort + Consent)
   - E-Mail-Verifizierung (Token-basiert)
   - Login (JWT)
   - Passwort vergessen/zurücksetzen
   - JWT-Strategy + Local-Strategy (Passport)
   - RBAC (Roles: participant, coach, moderator, admin)
   - Guards (JwtAuthGuard, LocalAuthGuard, RolesGuard)

3. **Users-Modul (MVP Sprint 1-2)** ✅
   - User + Profile Entities (TypeORM)
   - GET /users/me (eigenes Profil)
   - PUT /users/me/profile (Profil aktualisieren)
   - DELETE /users/me (Account löschen, DSGVO)
   - GET /users/me/export (Daten exportieren, DSGVO)

4. **Placeholder-Module** (Sprint 3+)
   - Programs, Challenges, Content, Quizzes, Recipes, Testimonials, Community, Notifications
   - Module erstellt, aber noch leer

5. **Datenbank-Entities**
   - User (id, email, password_hash, status, roles, email_verified)
   - Profile (id, user_id, first_name, last_name, avatar_url, bio, date_of_birth, health_data)
   - Role (id, name, permissions)

**Frontend (React + TypeScript + Vite + Tailwind CSS)**:

1. **Projektstruktur** ✅
   - React 18 + TypeScript
   - Vite (Build-Tool, Hot-Reload)
   - Tailwind CSS + shadcn/ui (UI-Komponenten)
   - React Router v6 (Routing)
   - Zustand (Auth-State, persistent)
   - TanStack Query (Data-Fetching)
   - Axios (HTTP-Client mit JWT-Interceptor)

2. **Pages** ✅
   - LandingPage (Übersicht Programm, Features, 4 Phasen)
   - LoginPage (E-Mail + Passwort)
   - RegisterPage (E-Mail + Passwort + Consent)
   - DashboardPage (Übersicht, Quick-Stats, Navigation)
   - ProfilePage (Profil-CRUD, DSGVO Export/Delete)

3. **UI-Komponenten** ✅
   - Button (Primary, Secondary, Outline, Ghost, Destructive)
   - Card (Header, Title, Description, Content, Footer)
   - Input (Text, E-Mail, Password)
   - Label

4. **Features** ✅
   - Auth-Flow (Register, Login, Logout)
   - JWT-Handling (Axios-Interceptor, localStorage)
   - Protected Routes (Dashboard, Profile)
   - Responsive Design (Mobile-First)
   - DSGVO-konform (Export, Delete)

---

## Nächste Schritte (für Dich)

### 1. Node.js installieren

macOS:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node@20
```

Oder direkt von [nodejs.org](https://nodejs.org/) downloaden.

### 2. Backend-Dependencies installieren

```bash
cd backend
npm install
```

### 3. Datenbank starten (Docker)

```bash
docker-compose up -d postgres redis
```

Falls Docker nicht installiert: [Docker Desktop für macOS](https://www.docker.com/products/docker-desktop/)

### 4. Environment-Variablen

```bash
cp env.example .env
```

Dann `.env` öffnen und `JWT_SECRET` + `ENCRYPTION_KEY` anpassen (zufällige Strings).

### 5. Rollen-Seed (Initial)

PostgreSQL mit psql verbinden:
```bash
docker exec -it cellreset-postgres psql -U cellreset -d cellreset_db
```

Dann Rollen einfügen:
```sql
INSERT INTO roles (id, name, permissions, created_at) VALUES
  (gen_random_uuid(), 'participant', '["read:content", "write:check_in", "read:recipes"]', NOW()),
  (gen_random_uuid(), 'coach', '["read:content", "read:participants", "write:message"]', NOW()),
  (gen_random_uuid(), 'moderator', '["read:testimonials", "write:moderation"]', NOW()),
  (gen_random_uuid(), 'admin', '["*"]', NOW());
```

Exit mit `\q`.

### 6. Backend starten

```bash
npm run start:dev
```

Backend läuft auf: `http://localhost:3000/api/v1`  
Swagger Docs: `http://localhost:3000/api-docs`

### 7. Frontend starten (neues Terminal)

```bash
cd ../frontend
npm install
npm run dev
```

Frontend läuft auf: `http://localhost:3001`

### 8. Testen

**Web-App** (Browser):
1. Öffne `http://localhost:3001`
2. Klicke auf "Registrieren"
3. Registriere einen Account (E-Mail + Passwort)
4. Prüfe Backend-Logs für Verifizierungscode (da E-Mail-Versand noch nicht implementiert)
5. Login mit E-Mail + Passwort
6. Dashboard & Profil testen

**API** (Curl):
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123!",
    "consent": {"terms": true, "privacy": true}
  }'
```

**E-Mail-Verifizierung** (Code aus Datenbank holen):
```bash
# Code aus DB: SELECT email_verification_token FROM users WHERE email = 'test@example.com';
curl -X POST http://localhost:3000/api/v1/auth/verify-email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "code": "<CODE_AUS_DB>"
  }'
```

**Login**:
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123!"
  }'
```

**Profil abrufen** (JWT aus Login-Response):
```bash
curl -X GET http://localhost:3000/api/v1/users/me \
  -H "Authorization: Bearer <ACCESS_TOKEN>"
```

---

## Projektstruktur

```
Cellreset/
├── product-spec.md           # Vollständige Product Spec (PRD)
├── PROJECT_OVERVIEW.md       # Diese Datei
├── SPRINT_1-2_SUMMARY.md     # Sprint-Summary
├── backend/                  # NestJS Backend
│   ├── src/
│   │   ├── auth/             # Auth-Modul ✅
│   │   ├── users/            # Users-Modul ✅
│   │   ├── programs/         # TODO Sprint 3-4
│   │   ├── challenges/       # TODO Sprint 3-4
│   │   ├── content/          # TODO Sprint 7-8
│   │   ├── quizzes/          # TODO Sprint 7-8
│   │   ├── recipes/          # TODO Sprint 9-10
│   │   ├── testimonials/     # TODO Sprint 11-12
│   │   ├── community/        # TODO Sprint 11-12
│   │   ├── notifications/    # TODO Sprint 5-6
│   │   └── common/           # Shared (Decorators, Guards)
│   ├── docker-compose.yml
│   ├── setup.sh
│   └── README.md
└── frontend/                 # React Frontend ✅
    ├── src/
    │   ├── components/       # UI-Komponenten (shadcn/ui)
    │   ├── pages/            # Routes (Landing, Login, Register, Dashboard, Profile)
    │   ├── services/         # API-Services (Axios)
    │   ├── lib/              # Store (Zustand), Utils
    │   └── App.tsx
    ├── index.html
    ├── vite.config.ts
    └── README.md
```

---

## Roadmap (2-Wochen-Sprints)

### Sprint 1-2: Foundation + Auth + Frontend ✅ (Fertig)
- Setup (NestJS, PostgreSQL, Docker, React, Vite, Tailwind)
- Backend: Auth (Register, Login, JWT, RBAC), Users (Profile, DSGVO)
- Frontend: Landing, Login, Register, Dashboard, Profile
- UI-Komponenten (Button, Card, Input, Label)
- Responsive Design (Mobile-First)

### Sprint 3-4: Program + Challenge-Engine
- **Entities**: Program, Phase, DayColorType, ChallengeTemplate, ChallengeInstance
- **API**:
  - GET /programs (Liste Programme)
  - POST /challenges (Challenge starten)
  - GET /challenges/me/active (aktuelle Challenge)
- **Day-Plan-Generator** (28 Tage Aktivierungsphase, Farb-Tage)

### Sprint 5-6: Daily Check-in + Tracking
- **Entities**: CheckIn, UserBadge, Badge
- **API**:
  - POST /check-ins (Check-in durchführen)
  - GET /check-ins/me (Historie)
  - GET /check-ins/me/stats (Streak, Compliance)
- **Notifications**: Push-Setup (FCM), Daily-Reminder

### Sprint 7-8: Content + Quiz
- **Entities**: ContentItem, ContentProgress, Quiz, QuizQuestion, QuizResult
- **API**:
  - GET /content (Lernpfade)
  - GET /content/{id} (Lektion)
  - POST /content/{id}/progress (Fortschritt)
  - POST /quizzes/{id}/submit (Quiz absenden)

### Sprint 9-10: Rezepte + Wochenplan
- **Entities**: Recipe, MealPlan, GroceryList
- **API**:
  - GET /recipes (Filter: Phase, Farb-Tag, Kategorie)
  - POST /recipes (User-contributed, optional)
  - POST /meal-plans (Wochenplan erstellen)
  - POST /meal-plans/{id}/grocery-list (Einkaufsliste generieren)

### Sprint 11-12: Testimonials + Community
- **Entities**: Testimonial, Consent, CommunityRoom, CommunityPost, CommunityReport
- **API**:
  - POST /testimonials (Upload Foto/Video + Text + Consent)
  - GET /admin/testimonials/pending (Freigabe-Queue)
  - POST /community/posts (Beitrag erstellen)
  - POST /community/posts/{id}/report (Melden)

### Sprint 13-14: Coach-Features + Testing
- **Entities**: CoachAssignment
- **API**:
  - GET /coaches/me/participants (Teilnehmer-Liste)
  - POST /coaches/me/participants/{id}/message (Nachricht senden)
- **Testing**: E2E, Performance, Bug-Fixes

---

## Tech-Decisions (aus Product Spec)

1. **Multiple Challenges**: User kann mehrere Challenges parallel starten (optional)
2. **Quiz-Wiederholungen**: Unbegrenzt
3. **Farb-Tag-Compliance**: Nur Tracking, kein Streak-Abbruch; Hinweis: "Je mehr Du Dich an das Konzept hältst, desto besser wirkt das Konzept"
4. **Video-Testimonials**: Ja, auch Videos (nicht nur Fotos)
5. **Rezepte**: 
   - Offiziell (Admin/CMS)
   - User-contributed (optional, mit Freigabe-Flow)
   - Rezepte nachkochen (read-only)
6. **Wochenplan + Einkaufsliste**: Optional (nicht Pflicht)

---

## Offene Punkte

- [ ] E-Mail-Versand (SendGrid/Mailgun Integration für Verifizierung/Reset)
- [ ] File-Upload (S3-kompatibel: Presigned URLs)
- [ ] Encryption (health_data in Profile verschlüsseln, AES-256)
- [ ] Seed-Script für Rollen (automatisiert)
- [ ] Unit-Tests (Auth, Users)
- [ ] E2E-Tests (Auth-Flow)
- [ ] CI/CD (GitHub Actions)
- [ ] Deployment (AWS/DigitalOcean/GCP)

---

## Fragen?

Bei Problemen:
1. Backend-README lesen: `backend/README.md`
2. Swagger-Docs checken: `http://localhost:3000/api-docs`
3. Logs prüfen: `docker-compose logs backend`
4. Product Spec: `product-spec.md` (vollständige Spezifikation)

---

**Stand**: 2026-02-06  
**Sprint**: 1-2 (Foundation + Auth) ✅  
**Nächster Sprint**: 3-4 (Program + Challenge-Engine)
