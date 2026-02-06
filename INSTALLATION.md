# 🎯 cellRESET Installation – Schritt für Schritt

## Für absolute Beginner

### Schritt 1: Terminal öffnen

1. Drücke `Cmd + Space` (Spotlight öffnen)
2. Tippe `Terminal` ein
3. Drücke `Enter`

→ Ein schwarzes oder weißes Fenster öffnet sich (das Terminal)

---

### Schritt 2: Zum Projekt-Ordner navigieren

Im Terminal tippe:

```bash
cd Documents/verdent-projects/Cellreset
```

Drücke `Enter`.

→ Du bist jetzt im cellRESET-Projektordner

---

### Schritt 3: Installation starten

Tippe im Terminal:

```bash
./install.sh
```

Drücke `Enter`.

→ Das Script installiert jetzt automatisch alles (Node.js, Docker, Dependencies)

**Das dauert ca. 5-10 Minuten.**

Während der Installation wirst Du eventuell gefragt:
- **Homebrew-Installation**: Drücke `Enter` und gib Dein Mac-Passwort ein
- **Docker Desktop**: Lade von der Website herunter, installiere es, starte Docker Desktop, dann im Terminal `Enter` drücken

---

### Schritt 4: App starten

Nach erfolgreicher Installation tippe:

```bash
./start.sh
```

Drücke `Enter`.

→ Backend und Frontend starten automatisch  
→ Browser öffnet sich automatisch mit `http://localhost:3001`

**Die App läuft jetzt!**

---

## Was siehst Du?

Im Terminal:
```
🚀 Starte cellRESET...
📦 Starte Datenbank...
🔧 Starte Backend...
🎨 Starte Frontend...

======================================
✅ cellRESET läuft!
======================================

Frontend: http://localhost:3001
Backend:  http://localhost:3000/api/v1
Swagger:  http://localhost:3000/api-docs
```

Im Browser:
- **Landing Page** mit "cellRESET" Logo
- Button "Registrieren" und "Anmelden"

---

## Erste Schritte in der App

1. **Klicke auf "Registrieren"**
2. **Erstelle einen Account**:
   - E-Mail: `dein-name@example.com`
   - Passwort: `MeinSicheresPasswort123!` (mindestens 8 Zeichen)
   - Haken bei "AGB" und "Datenschutz" setzen
   - Klicke "Registrieren"
3. **Erfolg!** → Du siehst "Registrierung erfolgreich!"
4. **Login**: Klicke auf "Jetzt anmelden"
   - Gib E-Mail + Passwort ein
   - Klicke "Anmelden"
5. **Dashboard**: Du siehst jetzt dein Dashboard mit:
   - "Willkommen zurück!"
   - "Deine Challenge" (Button: Challenge starten)
   - Quick Stats (0 Tage Streak, 0 Badges, etc.)

---

## App stoppen

Drücke im Terminal `Ctrl + C` (gleichzeitig).

→ Backend und Frontend werden gestoppt.

---

## App erneut starten

Tippe im Terminal:

```bash
./start.sh
```

Das war's!

---

## Probleme?

### Problem: `./install.sh: Permission denied`
**Lösung**:
```bash
chmod +x install.sh start.sh
./install.sh
```

### Problem: `Docker läuft nicht`
**Lösung**:
1. Docker Desktop öffnen (im Finder → Programme → Docker)
2. Warten bis Docker-Icon oben rechts in der Menüleiste erscheint
3. Erneut `./start.sh` ausführen

### Problem: `npm install` Fehler
**Lösung**:
```bash
# Node.js Version prüfen
node -v

# Sollte v18 oder höher sein
# Falls nicht: brew upgrade node
```

### Problem: Backend startet nicht
**Lösung**:
```bash
# Prüfe ob PostgreSQL läuft
docker ps

# Sollte "cellreset-postgres" und "cellreset-redis" zeigen
# Falls nicht:
cd backend
docker-compose up -d postgres redis
```

### Problem: Frontend zeigt 404
**Lösung**:
```bash
# Prüfe ob Backend läuft
curl http://localhost:3000/api/v1/auth/login

# Sollte JSON zurückgeben
# Falls nicht: Backend neu starten
```

---

## Logs anschauen

Falls etwas nicht funktioniert, schaue in die Logs:

**Backend-Logs**:
```bash
tail -f backend.log
```

**Frontend-Logs**:
```bash
tail -f frontend.log
```

Drücke `Ctrl + C` zum Beenden.

---

## Hilfe

Wenn gar nichts funktioniert:

1. **Alles stoppen**: `Ctrl + C` im Terminal
2. **Docker stoppen**: `docker-compose down` (im backend-Ordner)
3. **Docker neu starten**: Docker Desktop schließen und neu öffnen
4. **Neu starten**: `./start.sh`

---

**Bei weiteren Fragen**: [support@cellreset.com](mailto:support@cellreset.com)
