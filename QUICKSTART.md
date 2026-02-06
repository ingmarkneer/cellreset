# cellRESET – Schnellstart

## ⚡ Setup in 2 Befehlen!

### 1. Installation (alles automatisch)

```bash
./install.sh
```

Das Script installiert automatisch:
- ✅ Homebrew (falls nicht vorhanden)
- ✅ Node.js 20 (falls nicht vorhanden)
- ✅ Docker Desktop (Anleitung, falls nicht vorhanden)
- ✅ Backend-Dependencies (npm install)
- ✅ Frontend-Dependencies (npm install)
- ✅ PostgreSQL + Redis (Docker)
- ✅ Datenbank-Rollen (Seed)
- ✅ .env Datei mit sicheren Keys

### 2. App starten

```bash
./start.sh
```

Das war's! Browser öffnet automatisch auf `http://localhost:3001`

---

## 📱 Alternative: Manueller Start

Falls Du Backend + Frontend getrennt starten möchtest:

**Terminal 1 (Backend)**:
```bash
cd backend
npm run start:dev
```

**Terminal 2 (Frontend)**:
```bash
cd frontend
npm run dev
```

---

## 🎯 Erste Schritte

1. **Öffne Browser**: `http://localhost:3001`
2. **Registrieren**: Klicke auf "Registrieren"
   - E-Mail: `test@example.com`
   - Passwort: `SecurePass123!`
   - Akzeptiere AGB + Datenschutz
3. **Verifizierung** (Dev-Mode):
   - Prüfe Backend-Logs für Verifizierungscode
   - Oder überspringe direkt zu Login (E-Mail-Verifizierung optional im Dev)
4. **Login**: E-Mail + Passwort
5. **Dashboard**: Übersicht, Navigation, Quick-Stats
6. **Profil**: Name, Bio, DSGVO-Export/Delete

---

## 📁 Projektstruktur

```
Cellreset/
├── backend/          # NestJS API (Port 3000)
│   ├── src/          # TypeScript Source
│   ├── setup.sh      # Automatisches Setup
│   └── README.md     # Backend-Doku
└── frontend/         # React Web-App (Port 3001)
    ├── src/          # TypeScript Source
    └── README.md     # Frontend-Doku
```

---

## 🚀 Features (Sprint 1-2)

**Backend** ✅:
- Auth (Register, Login, JWT, RBAC)
- Users (Profile CRUD, DSGVO Export/Delete)
- PostgreSQL + Redis + Docker
- Swagger API-Dokumentation

**Frontend** ✅:
- Landing, Login, Register, Dashboard, Profile
- Responsive Design (Mobile-First)
- Tailwind CSS + shadcn/ui
- JWT-Handling (Zustand + localStorage)
- Protected Routes

---

## 🛠️ Troubleshooting

**Problem**: Backend startet nicht  
**Lösung**: Docker installiert? PostgreSQL läuft? (`docker-compose up -d postgres redis`)

**Problem**: Frontend zeigt 404  
**Lösung**: Backend läuft auf Port 3000? Proxy in `vite.config.ts` konfiguriert?

**Problem**: Login schlägt fehl (401)  
**Lösung**: E-Mail verifiziert? (Verifizierungscode aus Backend-Logs)

**Problem**: `npm install` schlägt fehl  
**Lösung**: Node.js 18+ installiert? (`node -v`)

---

## 📚 Dokumentation

- **Product Spec**: `product-spec.md` (1683 Zeilen, vollständige PRD)
- **Backend**: `backend/README.md`
- **Frontend**: `frontend/README.md`
- **Projekt-Übersicht**: `PROJECT_OVERVIEW.md`
- **Sprint-Summary**: `SPRINT_1-2_SUMMARY.md`

---

## 🎯 Nächste Sprints

**Sprint 3-4**: Program + Challenge-Engine  
**Sprint 5-6**: Daily Check-in + Tracking  
**Sprint 7-8**: Content + Quiz  
**Sprint 9-10**: Rezepte + Wochenplan  
**Sprint 11-12**: Testimonials + Community

---

**Stand**: Sprint 1-2 ✅ (Backend + Frontend fertig)  
**Datum**: 2026-02-06  
**Tech-Stack**: NestJS + PostgreSQL + React + Vite + Tailwind CSS

---

**Kontakt**: [support@cellreset.com](mailto:support@cellreset.com)
