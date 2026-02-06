# cellRESET Frontend

React-basierte Web-App für das cellRESET Stoffwechselprogramm.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **State Management**: Zustand (Auth-State)
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod (geplant)

## Voraussetzungen

- Node.js 18+ (LTS)
- npm oder yarn
- Backend läuft auf `http://localhost:3000` (siehe `../backend/README.md`)

## Installation

### 1. Dependencies installieren

```bash
cd frontend
npm install
```

### 2. Development Server starten

```bash
npm run dev
```

Frontend läuft auf: `http://localhost:3001`

### 3. Build für Production

```bash
npm run build
```

Build-Ausgabe: `dist/`

### 4. Preview Production-Build

```bash
npm run preview
```

## Projektstruktur

```
frontend/
├── src/
│   ├── components/
│   │   └── ui/              # Wiederverwendbare UI-Komponenten (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── pages/               # Route-Pages
│   │   ├── LandingPage.tsx  # Landing/Homepage
│   │   ├── LoginPage.tsx    # Login
│   │   ├── RegisterPage.tsx # Registrierung
│   │   ├── DashboardPage.tsx # Dashboard (nach Login)
│   │   └── ProfilePage.tsx  # Profil (CRUD, DSGVO)
│   ├── services/            # API-Services
│   │   ├── api.ts           # Axios-Instanz (JWT-Interceptor)
│   │   ├── auth.service.ts  # Auth-API-Calls
│   │   └── user.service.ts  # User-API-Calls
│   ├── lib/
│   │   ├── store.ts         # Zustand Auth-Store (persistent)
│   │   └── utils.ts         # cn() Helper (Tailwind merge)
│   ├── types/               # TypeScript-Types
│   ├── hooks/               # Custom Hooks
│   ├── assets/              # Statische Assets (Bilder, etc.)
│   ├── App.tsx              # Router + Protected Routes
│   ├── main.tsx             # Entry Point
│   └── index.css            # Tailwind Globals
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Features (Sprint 1-2)

### Implementiert ✅

1. **Landing Page**
   - Übersicht Programm (4 Phasen, Features)
   - CTA: Registrieren/Anmelden

2. **Auth-Flow**
   - Registrierung (E-Mail, Passwort, Consent)
   - Login (E-Mail, Passwort)
   - JWT-Token-Handling (Zustand + localStorage)
   - Protected Routes (Dashboard, Profile)

3. **Dashboard**
   - Übersicht (Quick-Stats, Next Steps)
   - Navigation (Challenge, Lernpfade, Rezepte, Community, etc.)
   - Logout

4. **Profil**
   - Profil-CRUD (Vorname, Nachname, Bio)
   - DSGVO: Daten exportieren (JSON)
   - DSGVO: Account löschen

5. **UI-Komponenten**
   - Button (Primary, Secondary, Outline, Ghost, Link, Destructive)
   - Card (Header, Title, Description, Content, Footer)
   - Input (Text, E-Mail, Password)
   - Label

### Geplant (Sprint 3+)

- Challenge-Start (Programm wählen, Startdatum)
- Täglicher Check-in (Farb-Tag, Compliance-Fragen)
- Lernpfade (Video, PDF, Worksheet, Quiz)
- Rezepte (Filter, Detail, Wochenplan, Einkaufsliste)
- Community (Themenräume, Posts, Kommentare)
- Testimonials (Upload Foto/Video, Text, Consent)
- Tracking-Charts (Energie, Verdauung, Haut, Schlaf)
- Notifications (In-App, Push)
- PWA (Service Worker, Offline-Modus)

## API-Konfiguration

Die API-URL wird über Vite-Proxy konfiguriert (siehe `vite.config.ts`):

```ts
proxy: {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
  },
}
```

**Production**: Anpassen in Vite-Config oder via Environment-Variable.

## Styling

**Tailwind CSS** mit **shadcn/ui** (headless UI primitives).

**Design-System**:
- Primary: Blau (HSL-basiert, siehe `index.css`)
- Dark Mode: vorbereitet (über `class="dark"`)
- Responsive: Mobile-First (Breakpoints: sm, md, lg, xl)

**Farben anpassen**: `index.css` (CSS-Variablen) + `tailwind.config.js`

## State Management

**Zustand** (Auth-State, persistent via localStorage):

```ts
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user, token) => void;
  clearAuth: () => void;
}
```

**TanStack Query** (Server-State, geplant für Sprint 3+):
- Challenge-Data
- Content-Data
- Recipes-Data

## Routing

**React Router v6**:

```ts
/ → LandingPage (öffentlich)
/login → LoginPage (öffentlich)
/register → RegisterPage (öffentlich)
/dashboard → DashboardPage (geschützt)
/profile → ProfilePage (geschützt)
```

**Protected Routes**: Prüfen `isAuthenticated` via Zustand, redirect zu `/login` falls nicht authentifiziert.

## Testing (TODO)

- **Unit**: Vitest (Vite-native)
- **E2E**: Playwright oder Cypress

## Deployment

### Vercel (empfohlen, kostenlos)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# dist/ Ordner zu Netlify hochladen
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Progressive Web App (PWA)

**Geplant für Sprint 5-6**:
- Service Worker (Offline-Support)
- Web App Manifest (installierbar auf Mobile)
- Push-Notifications (via Firebase Cloud Messaging)

## Entwicklung

### Hot-Reload

Vite bietet automatisches Hot-Reload (HMR):

```bash
npm run dev
```

Änderungen an `.tsx`, `.ts`, `.css` werden sofort übernommen.

### Linting

```bash
npm run lint
```

### Neue UI-Komponente hinzufügen

shadcn/ui Komponenten können manuell aus [ui.shadcn.com](https://ui.shadcn.com) kopiert werden.

Beispiel: `Alert`

1. Kopiere Code von shadcn.com
2. Erstelle `src/components/ui/alert.tsx`
3. Importiere in Page: `import { Alert } from '@/components/ui/alert'`

## Troubleshooting

**Problem**: `Cannot find module '@/...'`
**Lösung**: TypeScript-Pfade in `tsconfig.json` prüfen, VS Code neu laden

**Problem**: Tailwind-Styles werden nicht angewendet
**Lösung**: `index.css` in `main.tsx` importiert? Tailwind in `postcss.config.js` konfiguriert?

**Problem**: 401 Unauthorized
**Lösung**: Backend läuft? JWT-Token gültig? (Logout/Login)

## Lizenz

UNLICENSED (Proprietary)

## Kontakt

cellRESET Team – [support@cellreset.com](mailto:support@cellreset.com)
