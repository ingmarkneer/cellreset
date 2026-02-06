# 🚀 cellRESET – Deployment erfolgreich vorbereitet!

## ✅ Was ist fertig?

### 1. Deployment-Konfiguration
- ✅ **Vercel** (Frontend): `vercel.json` + Production-Environment
- ✅ **Railway** (Backend): `railway.json` + `Procfile` + Production-Environment
- ✅ **DEPLOYMENT.md**: Komplette 30-Minuten-Anleitung

### 2. Hosting-Optionen

Du hast jetzt **2 Möglichkeiten**:

```
┌─────────────────────────────────────────────────────────┐
│  Option 1: Lokal (Entwicklung)                         │
│                                                         │
│  ./install.sh  →  ./start.sh                           │
│  → http://localhost:3001                               │
│                                                         │
│  ✓ Kostenlos                                           │
│  ✓ Volle Kontrolle                                     │
│  ✓ Schnelle Entwicklung                                │
│  ✗ Läuft nur wenn Laptop an                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Option 2: Live im Internet (Production) ⭐            │
│                                                         │
│  Vercel + Railway  →  30 Minuten Setup                 │
│  → https://cellreset.vercel.app                        │
│                                                         │
│  ✓ 24/7 online (auch wenn Laptop aus)                  │
│  ✓ Automatische Updates (Git Push → Live)             │
│  ✓ SSL/HTTPS inklusive                                 │
│  ✓ Kostenlos (Free Tier, ~500-1000 Nutzer)            │
│  ✓ Eigene Domain möglich (app.cellreset.de)           │
│  ✓ Skalierbar (bis 10.000+ Nutzer)                    │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Empfehlung: Option 2 (Live-Deployment)

**Warum?**
- ✅ Nutzer können die App jederzeit erreichen (auch wenn Dein Laptop aus ist)
- ✅ Du kannst die URL teilen: `https://cellreset.vercel.app`
- ✅ Professioneller (eigene Domain möglich)
- ✅ Automatische Updates (Git Push → sofort live)
- ✅ Kostenlos (solange < 1000 Nutzer)

---

## 📋 Deployment in 30 Minuten (Schritt-für-Schritt)

### Schritt 1: Accounts erstellen (5 Min)

1. **GitHub**: [github.com](https://github.com) → "Sign up"
2. **Vercel**: [vercel.com](https://vercel.com) → "Continue with GitHub"
3. **Railway**: [railway.app](https://railway.app) → "Login with GitHub"

### Schritt 2: Code zu GitHub pushen (2 Min)

```bash
cd Documents/verdent-projects/Cellreset

# GitHub Repository erstellen (auf github.com → New Repository → "cellreset")
git remote add origin https://github.com/DEIN_USERNAME/cellreset.git
git push -u origin main
```

### Schritt 3: Backend auf Railway deployen (10 Min)

1. **PostgreSQL erstellen**: Railway Dashboard → "New Project" → "Provision PostgreSQL"
2. **Backend deployen**: "+ New" → "GitHub Repo" → "cellreset" → Root: `backend`
3. **Environment-Variablen setzen**:
   ```
   NODE_ENV=production
   JWT_SECRET=generiere_mit_openssl_rand_base64_32
   ENCRYPTION_KEY=generiere_mit_openssl_rand_base64_32
   CORS_ORIGIN=*
   ```
4. **Domain generieren**: Settings → Networking → "Generate Domain"
5. **Datenbank-Rollen erstellen**: PostgreSQL → Data → Query → SQL ausführen (siehe DEPLOYMENT.md)

### Schritt 4: Frontend auf Vercel deployen (10 Min)

1. **Projekt importieren**: [vercel.com/new](https://vercel.com/new) → "cellreset" Repo → Root: `frontend`
2. **Environment-Variable setzen**:
   ```
   VITE_API_URL=https://deine-railway-backend-url.up.railway.app
   ```
3. **Deploy**: Button klicken → 2 Minuten warten
4. **Fertig!**: URL öffnen → `https://cellreset.vercel.app`

### Schritt 5: CORS konfigurieren (3 Min)

Railway → Backend → Variables → `CORS_ORIGIN` ändern:
```
CORS_ORIGIN=https://cellreset.vercel.app
```

Deploy → Fertig!

---

## 🎉 Ergebnis

Nach 30 Minuten:

```
✅ Backend läuft auf:
   https://cellreset-backend.up.railway.app/api/v1

✅ Frontend läuft auf:
   https://cellreset.vercel.app

✅ App ist live im Internet!
✅ SSL/HTTPS automatisch aktiv
✅ Kostenlos (Free Tier)
```

**Teile die URL** mit Testern, Familie, Freunden!

---

## 💰 Kosten-Übersicht

| Service | Free Tier | Was passiert bei mehr Traffic? |
|---------|-----------|--------------------------------|
| **Vercel** (Frontend) | ✅ Unbegrenzt | Bleibt kostenlos |
| **Railway** (Backend) | $5 Credit/Monat | ~$5-10/Monat für 1000+ Nutzer |
| **PostgreSQL** | In $5 Credit enthalten | - |
| **Domain** (optional) | - | ~10€/Jahr |

**Total**: **0€/Monat** solange < 1000 Nutzer

---

## 📚 Dokumentation

### Deployment:
- **DEPLOYMENT.md** ⭐ – Komplette Anleitung (30 Min, Schritt-für-Schritt)

### Entwicklung:
- **INSTALLATION.md** – Lokale Installation (für Entwicklung)
- **QUICKSTART.md** – Quick-Start (2 Befehle)

---

## 🔄 Automatische Updates

Nach dem Deployment:

**Jede Code-Änderung wird automatisch live!**

```bash
# 1. Code ändern
# 2. Commiten + Pushen
git add .
git commit -m "feat: Neue Feature XYZ"
git push

# 3. Warten (2-3 Minuten)
# 4. Fertig! → Live auf https://cellreset.vercel.app
```

Kein manuelles Deployment mehr nötig! 🎉

---

## 🎯 Nächste Schritte

### Sofort (empfohlen):

1. **Deployment durchführen** (30 Min)
   ```
   → Siehe DEPLOYMENT.md
   ```

2. **App testen**
   ```
   → https://cellreset.vercel.app öffnen
   → Registrieren + Login
   → Dashboard testen
   ```

3. **URL teilen**
   ```
   → An Tester schicken
   → Feedback sammeln
   ```

### Optional:

4. **Eigene Domain** (später)
   ```
   → Domain kaufen (z.B. cellreset.de)
   → In Vercel einbinden
   → App läuft auf: https://app.cellreset.de
   ```

### Sprint 3-4 (nächste 2 Wochen):

5. **Challenge-Engine implementieren**
   ```
   → Program-Modul (Backend)
   → Challenge-Start Flow (Frontend)
   → Git Push → Automatisch live!
   ```

---

## ❓ Fragen?

**"Wie teuer wird es später?"**
→ Solange < 1000 Nutzer: **0€/Monat**  
→ Bei 1000-5000 Nutzern: **~5-10€/Monat**  
→ Bei > 5000 Nutzern: **~20-50€/Monat** (Railway skaliert automatisch)

**"Kann ich später zu eigenem Server wechseln?"**
→ Ja, jederzeit! Code läuft überall (Docker-Support inklusive)

**"Was ist mit Daten-Backups?"**
→ Railway macht automatische PostgreSQL-Backups (täglich)

**"Kann ich mehrere Umgebungen haben (Dev, Staging, Prod)?"**
→ Ja! Railway + Vercel unterstützen mehrere Environments kostenlos

---

**Los geht's!** → `DEPLOYMENT.md` öffnen und in 30 Minuten live sein! 🚀
