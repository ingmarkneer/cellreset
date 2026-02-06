# 🚀 cellRESET Deployment Guide

## Live-Deployment auf Vercel + Railway (kostenlos)

Diese Anleitung zeigt, wie Du cellRESET auf echten Webservern hostest – **ohne** dass es auf Deinem Laptop laufen muss.

**Kosten**: 
- Frontend (Vercel): **kostenlos** (Hobby-Plan)
- Backend (Railway): **$5 Credit/Monat** (ausreichend für ~500-1000 Nutzer)
- Domain (optional): **~10€/Jahr** (z.B. cellreset.de)

**Dauer**: ~30 Minuten

---

## Schritt 1: Accounts erstellen

### 1.1 GitHub Account (falls nicht vorhanden)

1. Gehe zu [github.com](https://github.com)
2. Klicke "Sign up"
3. Erstelle einen Account

### 1.2 Vercel Account (Frontend)

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke "Sign up"
3. Wähle "Continue with GitHub"
4. Autorisiere Vercel

### 1.3 Railway Account (Backend)

1. Gehe zu [railway.app](https://railway.app)
2. Klicke "Login with GitHub"
3. Autorisiere Railway

---

## Schritt 2: Code zu GitHub pushen

Öffne Terminal im cellRESET-Projektordner:

```bash
cd Documents/verdent-projects/Cellreset

# GitHub Repository erstellen (falls noch nicht geschehen)
# Gehe zu github.com → "New Repository" → Name: "cellreset"

# Remote hinzufügen
git remote add origin https://github.com/DEIN_USERNAME/cellreset.git

# Code pushen
git push -u origin main
```

Ersetze `DEIN_USERNAME` mit Deinem GitHub-Username.

---

## Schritt 3: Backend deployen (Railway)

### 3.1 PostgreSQL Datenbank erstellen

1. Gehe zu [railway.app/dashboard](https://railway.app/dashboard)
2. Klicke "New Project"
3. Wähle "Provision PostgreSQL"
4. Warte bis Datenbank läuft (~30 Sekunden)

### 3.2 Backend-Service erstellen

1. Im gleichen Projekt: Klicke "+ New"
2. Wähle "GitHub Repo"
3. Wähle Dein "cellreset" Repository
4. Railway erkennt NestJS automatisch
5. Klicke auf den Service → "Settings" → "Root Directory"
6. Setze Root Directory: `backend`
7. Klicke "Deploy"

### 3.3 Environment-Variablen konfigurieren

1. Klicke auf den Backend-Service
2. Gehe zu "Variables" Tab
3. Klicke "Add Variable" und füge hinzu:

**Pflicht-Variablen**:

```
NODE_ENV=production
PORT=3000
API_PREFIX=api/v1

# JWT Secret (generiere mit: openssl rand -base64 32)
JWT_SECRET=dein_generierter_32_zeichen_string
JWT_ACCESS_TOKEN_EXPIRATION=15m
JWT_REFRESH_TOKEN_EXPIRATION=30d

# Encryption Key (generiere mit: openssl rand -base64 32)
ENCRYPTION_KEY=dein_generierter_32_zeichen_string

# Rate Limiting
THROTTLE_TTL=60
THROTTLE_LIMIT=100

# CORS (wird später mit Vercel-URL aktualisiert)
CORS_ORIGIN=*
```

**PostgreSQL-Variablen** (Railway setzt diese automatisch):
- Klicke auf PostgreSQL-Service → "Connect" → "Variables"
- Kopiere alle `DATABASE_*` Variablen
- Füge sie im Backend-Service als `DB_*` ein:
  - `DATABASE_URL` → wird automatisch verwendet
  - Oder einzeln: `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`

4. Klicke "Deploy" (neues Deployment mit Variablen)

### 3.4 Domain aufrufen

1. Klicke auf Backend-Service → "Settings" → "Networking"
2. Aktiviere "Generate Domain"
3. Kopiere die URL (z.B. `https://cellreset-backend-production.up.railway.app`)

**Teste Backend**:
Öffne im Browser: `https://deine-railway-url.up.railway.app/api/v1/auth/login`

Erwartete Antwort: `{"statusCode":401,...}` (= Backend läuft!)

### 3.5 Datenbank-Rollen erstellen (Seed)

Railway bietet kein direktes Terminal, aber wir können es via NestJS-Migration machen:

**Option A: Manuell via Railway PostgreSQL**

1. Gehe zu PostgreSQL-Service → "Data" Tab
2. Klicke "Query"
3. Führe aus:

```sql
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
```

**Option B: Via Migration** (später, wenn Backend läuft):
→ Wird in Sprint 3 implementiert (automatisches Seeding beim ersten Start)

---

## Schritt 4: Frontend deployen (Vercel)

### 4.1 Projekt importieren

1. Gehe zu [vercel.com/new](https://vercel.com/new)
2. Klicke "Import Project"
3. Wähle Dein "cellreset" GitHub Repository
4. **Root Directory**: `frontend` (wichtig!)
5. **Framework Preset**: Vite (wird automatisch erkannt)

### 4.2 Environment-Variablen setzen

Unter "Environment Variables" füge hinzu:

```
VITE_API_URL=https://deine-railway-backend-url.up.railway.app
```

Ersetze mit Deiner Railway-Backend-URL (ohne `/api/v1` am Ende).

### 4.3 Deployen

1. Klicke "Deploy"
2. Warte ~2 Minuten
3. Vercel zeigt Dir die URL (z.B. `https://cellreset.vercel.app`)

**Teste Frontend**:
Öffne die Vercel-URL im Browser → Landing Page sollte erscheinen!

---

## Schritt 5: CORS konfigurieren

Jetzt müssen Backend und Frontend miteinander sprechen können.

1. Gehe zu Railway → Backend-Service → "Variables"
2. Aktualisiere `CORS_ORIGIN`:

```
CORS_ORIGIN=https://cellreset.vercel.app
```

Ersetze mit Deiner Vercel-URL.

3. Klicke "Deploy" (neues Deployment)
4. Warte ~2 Minuten

---

## Schritt 6: Testen

### 6.1 Öffne Frontend

Gehe zu: `https://cellreset.vercel.app` (Deine Vercel-URL)

### 6.2 Registriere einen Account

1. Klicke "Registrieren"
2. E-Mail: `test@example.com`
3. Passwort: `SecurePass123!`
4. Akzeptiere AGB + Datenschutz
5. Klicke "Registrieren"

**Erwartete Antwort**: "Registrierung erfolgreich!"

### 6.3 Login

1. Klicke "Jetzt anmelden"
2. E-Mail + Passwort eingeben
3. Klicke "Anmelden"

**Erwartete Antwort**: Dashboard mit "Willkommen zurück!"

🎉 **Die App läuft live im Internet!**

---

## Schritt 7: Eigene Domain (optional)

### 7.1 Domain kaufen

Kaufe eine Domain (z.B. `cellreset.de`) bei:
- Namecheap (~10€/Jahr)
- Google Domains
- Cloudflare (~8€/Jahr)

### 7.2 Domain zu Vercel hinzufügen

1. Gehe zu Vercel → Dein Projekt → "Settings" → "Domains"
2. Klicke "Add Domain"
3. Gib ein: `app.cellreset.de` (oder `cellreset.de`)
4. Vercel zeigt DNS-Einträge

### 7.3 DNS konfigurieren

Gehe zu Deinem Domain-Provider → DNS-Einstellungen:

**CNAME-Eintrag**:
```
Type: CNAME
Name: app (oder @)
Value: cname.vercel-dns.com
TTL: Auto
```

Warte 5-60 Minuten → Domain zeigt auf Vercel.

### 7.4 CORS aktualisieren

Railway → Backend → Variables → `CORS_ORIGIN`:

```
CORS_ORIGIN=https://app.cellreset.de
```

Deploy → Fertig!

---

## Automatische Updates

**Jedes Mal wenn Du Code änderst**:

```bash
git add .
git commit -m "fix: Bugfix XYZ"
git push
```

→ Vercel + Railway deployen automatisch neu (~2-3 Minuten)

---

## Kosten-Übersicht

| Service | Free Tier | Paid (falls nötig) |
|---------|-----------|-------------------|
| **Vercel** (Frontend) | ✅ Unbegrenzt | - |
| **Railway** (Backend) | $5 Credit/Monat (~500-1000 User) | $0.000463/GB-hour |
| **PostgreSQL** (Railway) | In $5 Credit enthalten | - |
| **Domain** (optional) | - | ~10€/Jahr |

**Total**: **0€/Monat** (solange im Free Tier)

Wenn Deine App wächst (>1000 Nutzer), kostet Railway ~5-10€/Monat extra.

---

## Monitoring & Logs

### Railway Logs

1. Gehe zu Railway → Backend-Service
2. Klicke "Deployments" → neuestes Deployment → "View Logs"

### Vercel Logs

1. Gehe zu Vercel → Dein Projekt
2. Klicke "Deployments" → neuestes Deployment → "Build Logs"

---

## Troubleshooting

### Problem: Backend deploy schlägt fehl

**Lösung**:
1. Railway Logs checken
2. Häufigste Ursache: `NODE_ENV=production` fehlt
3. Oder: PostgreSQL nicht verbunden → `DATABASE_URL` Variable prüfen

### Problem: Frontend zeigt 404 bei API-Calls

**Lösung**:
1. `VITE_API_URL` in Vercel korrekt gesetzt? (ohne `/api/v1`)
2. `CORS_ORIGIN` in Railway korrekt gesetzt?
3. Backend läuft? → Railway-URL im Browser öffnen → sollte JSON zurückgeben

### Problem: "E-Mail nicht verifiziert" beim Login

**Lösung**:
E-Mail-Versand ist noch nicht implementiert (Sprint 5). Temporär:
1. Railway → PostgreSQL → "Data" → "Query"
2. Führe aus:
```sql
UPDATE users SET email_verified = true WHERE email = 'test@example.com';
```

### Problem: Railway "Out of credits"

**Lösung**:
1. Railway → Billing → "Add $5"
2. Oder: Wechsel zu Render.com (ebenfalls kostenlos)

---

## Nächste Schritte

1. ✅ **App ist live!** → `https://cellreset.vercel.app`
2. ✅ **Teilen** → Gib die URL an Tester weiter
3. ⏭️ **Sprint 3-4** → Challenge-Engine implementieren
4. ⏭️ **E-Mail-Versand** → SendGrid integrieren (Sprint 5)
5. ⏭️ **File-Uploads** → AWS S3 konfigurieren (Sprint 11)

---

**Fragen?** → [support@cellreset.com](mailto:support@cellreset.com)

**Deployment-Status prüfen**:
- Backend: https://deine-railway-url.up.railway.app/api/v1
- Frontend: https://cellreset.vercel.app
