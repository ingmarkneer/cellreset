# cellRESET Mobile App – Product Specification (PRD)

---

## 1. PRODUCT OVERVIEW

### 1.1 Produktzweck
Mobile Schulungs- und Challenge-App für das Stoffwechselprogramm „cellRESET-Metabolism".

### 1.2 Zielgruppen
1. **Teilnehmer/Kunden** – Programmanwender
2. **Teampartner/Coaches** – Begleitung, Onboarding, Moderation
3. **Moderatoren** – Community/Testimonials-Freigabe
4. **Admins** – Content- und Nutzerverwaltung

### 1.3 Programmlogik (cellRESET – verbindlich)

#### Phasen
- **Vorbereitungsphase**: 14–30 Tage
- **Aktivierungsphase**: 28 Tage
- **Stabilisierungsphase**: mindestens 90 Tage
- **Lifestylephase**: lebenslang

#### Tageslogik (Farben)
- **Weißer Tag (Aktivierungstag)**: eiweißreich, ohne Salz/Zucker, strikte Regeln
- **Grüner Tag (Energietag)**: + Gemüse/Salat/Rohkost + 1 Portion Obst/Tag
- **Roter Tag (Lifestyletag)**: flexibler Tag, Ausgleich über weiße Tage danach

#### Aktivierungsphase Struktur (Beispiel)
- Start: 7 weiße Tage
- Danach: grüne Tage mit eingeschobenen weißen Tagen
- Details: programmseitige Schedule-Templates

#### Tracking-Dimensionen
- Vitalcheck-Fragen
- Verlaufs-/Mess-Tabelle: Energie, Verdauung, Haut, Regeneration/Schlaf
- Optional: Gewicht, Umfänge

#### Regeln
- Trinken, Essen, Kauen (z.B. 32x), Abstand Essen/Trinken, Sport
- Als Content + Check-in/Reminder abbildbar

---

## 2. USER STORIES

### 2.1 Teilnehmer/Kunde

**US-T01**: Als Teilnehmer möchte ich mich registrieren und ein sicheres Konto erstellen, damit ich Zugriff auf das Programm habe.

**US-T02**: Als Teilnehmer möchte ich nach Login das Programm auswählen und ein Startdatum festlegen, damit meine Challenge an Day 1 beginnt.

**US-T03**: Als Teilnehmer möchte ich täglich meinen Check-in durchführen (Farb-Tag, Compliance-Fragen), damit ich meinen Fortschritt tracke.

**US-T04**: Als Teilnehmer möchte ich strukturiert durch Lernpfade geführt werden (Video, PDF, Worksheet), damit ich das Programm verstehe.

**US-T05**: Als Teilnehmer möchte ich nach Lektionen Quizfragen beantworten, damit mein Wissen überprüft wird.

**US-T06**: Als Teilnehmer möchte ich Rezepte nach Phase/Farb-Tag filtern und nachkochen, damit ich mich korrekt ernähre.

**US-T06b**: Als Teilnehmer möchte ich optional eigene Rezepte hochladen und mit der Community teilen, damit ich kreativ beitragen kann.

**US-T07**: Als Teilnehmer möchte ich optional Rezepte in einen Wochenplan ziehen und daraus eine Einkaufsliste generieren, damit ich meinen Speiseplan organisiere.

**US-T08**: Als Teilnehmer möchte ich meine Vorher/Nachher-Fotos/Videos und Testimonial hochladen (inkl. Consent), damit ich meine Erfolge teilen kann.

**US-T09**: Als Teilnehmer möchte ich in Themenräumen Fragen stellen und Beiträge lesen, damit ich mich austauschen kann.

**US-T10**: Als Teilnehmer möchte ich Push-Notifications und Erinnerungen erhalten, damit ich motiviert bleibe.

**US-T11**: Als Teilnehmer möchte ich meine Tracking-Daten als Chart visualisieren und als CSV/PDF exportieren, damit ich meinen Verlauf analysiere.

**US-T12**: Als Teilnehmer möchte ich jederzeit meine Daten löschen oder exportieren (DSGVO), damit ich die Kontrolle behalte.

**US-T13**: Als Teilnehmer möchte ich die Aktivierungsphase wiederholen können, damit ich nach Pause neu starten kann.

**US-T14**: Als Teilnehmer möchte ich Badges, Streaks und Milestones sehen, damit ich gamifiziert motiviert werde.

### 2.2 Coach/Teampartner

**US-C01**: Als Coach möchte ich mich als Coach-Rolle registrieren, damit ich Teilnehmer betreuen kann.

**US-C02**: Als Coach möchte ich zugewiesene Teilnehmer sehen (Dashboard), damit ich deren Fortschritt überblicke.

**US-C03**: Als Coach möchte ich Teilnehmer onboarden (Startdatum setzen, Programm zuweisen), damit sie strukturiert beginnen.

**US-C04**: Als Coach möchte ich Nachrichten/Check-ins von Teilnehmern sehen, damit ich individuell unterstütze.

**US-C05**: Als Coach möchte ich Standard-Antworten/Ressourcen senden, damit ich effizient reagiere.

**US-C06**: Als Coach möchte ich Berichte über Teilnehmer-Compliance exportieren, damit ich Erfolge dokumentiere.

### 2.3 Moderator

**US-M01**: Als Moderator möchte ich gemeldete Community-Beiträge in einer Queue sehen, damit ich schnell reagiere.

**US-M02**: Als Moderator möchte ich Testimonials zur Freigabe prüfen (Foto/Video, Text, Consent), damit nur konforme Inhalte veröffentlicht werden.

**US-M03**: Als Moderator möchte ich Beiträge löschen, ausblenden oder freigeben, damit die Community sauber bleibt.

**US-M04**: Als Moderator möchte ich Nutzer temporär blockieren, damit Missbrauch verhindert wird.

### 2.4 Admin

**US-A01**: Als Admin möchte ich alle Content-Items (Video, PDF, Rezept, Quiz, FAQ) anlegen/bearbeiten/löschen, damit ich die App aktuell halte.

**US-A02**: Als Admin möchte ich Challenge-Templates konfigurieren (Phasen, Farb-Tage, Day-N Plan), damit das Programm korrekt abläuft.

**US-A03**: Als Admin möchte ich Nutzer verwalten (Rollen, Sperren, Löschen), damit ich die Plattform kontrolliere.

**US-A04**: Als Admin möchte ich Freigabeprozesse für Testimonials steuern, damit nur geprüfte Inhalte live gehen.

**US-A05**: Als Admin möchte ich Analytics sehen (aktive Nutzer, Completion-Rates, Quiz-Ergebnisse), damit ich Erfolge messe.

**US-A06**: Als Admin möchte ich Reminder-Texte und Push-Templates verwalten, damit ich Kommunikation steuere.

**US-A07**: Als Admin möchte ich Content versionieren (aktuelle Version), damit Änderungen sofort wirken.

**US-A08**: Als Admin möchte ich DSGVO-Logs einsehen (Consent, Löschungen), damit ich compliant bleibe.

---

## 3. CORE FLOWS

### 3.1 Auth/Onboarding

**Flow**: Registrierung → E-Mail-Verifizierung → Profil anlegen → Onboarding-Quiz (Gesundheitsdaten, Ziele) → Programm wählen → Startdatum festlegen → Challenge startet an Day 1

**Screens**:
1. Splash/Landing
2. Login
3. Registrierung (E-Mail, Passwort, AGB/DSGVO Opt-in)
4. E-Mail-Verifizierung (Code eingeben)
5. Profil anlegen (Name, Avatar optional)
6. Onboarding-Quiz (Gesundheitsfragen, Ziele)
7. Programmauswahl (cellRESET-Metabolism; später Multi-Programm)
8. Startdatum wählen
9. Bestätigung/Dashboard (Day 1 wartet)

**Edge Cases**:
- E-Mail bereits registriert → Fehlermeldung
- Passwort vergessen → Reset-Flow (E-Mail-Link)
- Abbruch Onboarding → Fortschritt speichern, später fortsetzbar
- Onboarding-Quiz übersprungen → Hinweis, später nachholbar

### 3.2 Programmauswahl + Start Challenge

**Flow**: Programm wählen → Startdatum festlegen → Challenge-Template wird instanziiert → Day-N Plan wird generiert → Push-Notification an Day 1

**Screens**:
1. Programmauswahl (Liste, Details, Start-Button)
2. Startdatum wählen (Kalender)
3. Bestätigung (Zusammenfassung, Phase 1, erster weißer Tag)
4. Dashboard (Countdown bis Day 1)

**Edge Cases**:
- Startdatum in Vergangenheit → Fehler
- Startdatum > 30 Tage → Warnung (zu weit in Zukunft)
- Challenge bereits gestartet → "Bereits aktiv", kein Neustart ohne Abbruch

### 3.3 Daily Check-in (weiß/grün/rot)

**Flow**: Push-Notification → App öffnen → Tagesübersicht (Farb-Tag, Regeln, Aufgaben) → Check-in durchführen (Compliance-Fragen, Vitalcheck) → Bestätigung → Streak +1

**Screens**:
1. Dashboard mit aktuellem Tag (Day N, Farb-Tag, Phase)
2. Tagesübersicht (Regeln, Aufgaben, Rezeptvorschläge)
3. Check-in Dialog (Fragen: Wasser getrunken? 32x gekaut? Abstand Essen/Trinken? Energie 1-10? Verdauung 1-10? etc.)
4. Check-in Bestätigung (Streak, Badge falls Milestone)

**Edge Cases**:
- Check-in verpasst → Streak bricht, Hinweis
- Mehrfache Check-ins an einem Tag → nur erster zählt
- Falsche Farb-Tag-Compliance (z.B. Salz an weißem Tag) → Warnung, Tracking als "Non-Compliant"

### 3.4 Content-Consumption (Video/PDF/Worksheet)

**Flow**: Dashboard → Lernpfad wählen → Lektion öffnen → Content konsumieren (Video abspielen, PDF lesen) → Checkpoint/Aufgabe erledigen → Fortschritt speichern → Quiz (optional)

**Screens**:
1. Content-Library (Liste: Module, Lektionen)
2. Lektionsdetail (Titel, Beschreibung, Video/PDF/Worksheet)
3. Video-Player (mit Progress-Tracking)
4. PDF-Viewer
5. Worksheet (interaktive Felder oder PDF-Download)
6. Checkpoint-Bestätigung (z.B. "Aufgabe erledigt")
7. Quiz (falls konfiguriert nach Lektion)

**Edge Cases**:
- Video-Stream schlägt fehl → Offline-Download-Option (v2)
- PDF zu groß → Lazy-Loading, Pagination
- Checkpoint nicht erledigt → Lektion bleibt "In Progress"
- Quiz nicht bestanden → Wiederholung möglich, Lektion bleibt offen

### 3.5 Quiz

**Flow**: Quiz-Trigger (nach Lektion oder Onboarding) → Fragen nacheinander anzeigen → Antworten speichern → Ergebnis berechnen → Feedback anzeigen → ggf. Lektion wiederholen

**Screens**:
1. Quiz-Start (Titel, Anzahl Fragen, Zeit optional)
2. Frage (Single-Choice, Multi-Choice, Text)
3. Fortschrittsanzeige (z.B. 3/10)
4. Ergebnis (Score, richtige/falsche Antworten, Feedback)
5. Wiederholung (falls nicht bestanden)

**Edge Cases**:
- Abbruch während Quiz → Fortschritt speichern, später fortsetzbar
- Keine Internetverbindung → Offline-Modus (Antworten lokal, später sync)
- Quiz bereits bestanden → nur Wiederholung zur Verbesserung

### 3.6 Rezeptplan + Einkaufsliste

**Flow**: Rezepte-Tab → Filter (Phase, Farb-Tag, Allergene) → Rezept wählen → in Wochenplan ziehen (Drag&Drop oder Button) → Wochenplan anzeigen → Einkaufsliste generieren → Export/Teilen

**Screens**:
1. Rezepte-Library (Liste mit Filter: Phase, Farb-Tag, Kategorie, Suche)
2. Rezept-Detail (Zutaten, Zubereitung, Nährwerte, Foto)
3. Wochenplan (7 Tage, je 3-5 Mahlzeiten)
4. Drag&Drop oder "Hinzufügen zu Tag X, Mahlzeit Y"
5. Einkaufsliste (gruppiert nach Kategorien, abhakelbar)
6. Export (CSV, PDF, Teilen per E-Mail/WhatsApp)

**Edge Cases**:
- Rezept nicht passend zu Farb-Tag → Warnung
- Wochenplan leer → Standard-Vorschlag anbieten
- Einkaufsliste Duplikate → Mengen aggregieren
- Allergene nicht berücksichtigt → Hinweis/Filter

### 3.7 Testimonial Upload + Freigabe

**Flow**: Teilnehmer → Profil → Testimonial hochladen (Vorher/Nachher Foto, Text, Consent) → Status "Zur Prüfung" → Moderator prüft → Freigabe/Ablehnung → bei Freigabe: optional öffentlich

**Screens**:
1. Profil (Testimonial-Bereich)
2. Testimonial Upload (Foto-Upload Vorher, Nachher, Text, Consent-Checkbox)
3. Consent-Dialog (Nutzungsrechte, DSGVO, Widerruf)
4. Bestätigung (Status "Zur Prüfung")
5. Moderator-Queue (Liste zur Freigabe)
6. Testimonial-Review (Foto, Text, Consent-Status, Freigabe/Ablehnung)
7. Freigabe-Bestätigung (optional Veröffentlichung in App/Website)

**Edge Cases**:
- Foto-Format ungültig → Fehler, nur JPG/PNG
- Foto zu groß → Kompression
- Kein Consent → Upload nicht möglich
- Ablehnung durch Moderator → Benachrichtigung, Grund angeben
- Widerruf nach Freigabe → Testimonial wird ausgeblendet, Consent-Log

### 3.8 Community Posting + Moderation

**Flow**: Teilnehmer → Community-Tab → Themenraum wählen → Beitrag erstellen (Text, Foto optional) → Post → andere sehen/kommentieren → Melden-Button → Moderator-Queue → Moderation

**Screens**:
1. Community-Tab (Liste: Themenräume)
2. Themenraum (Feed: Beiträge chronologisch)
3. Beitrag erstellen (Text, Foto optional, Regeln-Hinweis)
4. Beitrags-Detail (Kommentare, Likes, Melden-Button)
5. Melden-Dialog (Grund: Spam, Hassrede, Falschinformation, etc.)
6. Moderator-Queue (gemeldete Beiträge)
7. Moderations-Detail (Beitrag, Meldungen, Aktion: Löschen, Ausblenden, Freigeben, Nutzer blockieren)

**Edge Cases**:
- Beitrag ohne Text → Fehler
- Foto zu groß → Kompression
- Mehrfache Meldungen → Queue zeigt Anzahl
- Nutzer blockiert → keine weiteren Posts möglich, Benachrichtigung
- Beitrag gelöscht → Benachrichtigung an Autor

---

## 4. EDGE CASES (Gesamt)

### 4.1 Abbruch Challenge
- Teilnehmer bricht ab → Status "Abgebrochen", Daten bleiben erhalten
- Restart möglich → neue Challenge-Instanz, alte Daten archiviert
- Annahme: Abbruch-Grund optional erfragen (Analytics)

### 4.2 Phase-Wechsel
- Automatisch nach Tagen → Phase 2 startet an Day 29 (Aktivierung → Stabilisierung)
- Manuelle Verlängerung (z.B. Vorbereitungsphase 14-30 Tage) → Admin/Coach kann anpassen
- Annahme: Phase-Wechsel-Logik im Challenge-Template konfigurierbar

### 4.3 Wiederholung Aktivierungsphase
- Teilnehmer in Stabilisierungs- oder Lifestylephase → "Aktivierung wiederholen" Button
- Neue Challenge-Instanz wird erstellt, alte bleibt als Historie
- Day-N Plan wird neu generiert, Farb-Tage zurückgesetzt

### 4.4 Datenlöschung/Export (DSGVO)
- Teilnehmer → Profil → "Daten exportieren" → ZIP mit JSON/CSV/PDF
- Teilnehmer → Profil → "Konto löschen" → Bestätigung → alle personenbezogenen Daten gelöscht (anonymisierte Analytics bleiben)
- Annahme: Löschung ist final, Wiederherstellung nicht möglich

### 4.5 Opt-in Widerruf
- Teilnehmer widerruft Consent (Testimonial, Datenverarbeitung) → Testimonial wird ausgeblendet, Consent-Log
- Push-Notifications → Opt-out möglich, System-Einstellungen
- Annahme: Consent-Widerruf führt nicht zu Konto-Löschung, nur zu Einschränkung der Nutzung

### 4.6 Foto-Moderation
- Testimonial/Community-Foto hochgeladen → automatische Prüfung (v2: AI-Moderation)
- Manuelle Prüfung durch Moderator → Freigabe/Ablehnung
- Annahme: Fotos werden komprimiert, EXIF-Daten entfernt (Privacy)

---

## 5. INFORMATIONSARCHITEKTUR

### 5.1 App-Navigation (Mobile)

```
Tabs (Bottom Navigation):
1. Dashboard (Home)
2. Content (Lernpfade)
3. Rezepte
4. Community
5. Profil

Dashboard:
- Aktueller Tag (Day N, Farb-Tag, Phase)
- Check-in Button
- Streak/Badges
- Nächste Aufgabe/Lektion
- Quick-Links (Wochenplan, Einkaufsliste)

Content:
- Lernpfade (Module, Lektionen)
- Lektionsdetail (Video/PDF/Worksheet)
- Quiz

Rezepte:
- Rezepte-Library (Filter)
- Rezept-Detail
- Wochenplan
- Einkaufsliste

Community:
- Themenräume (Liste)
- Feed (Beiträge)
- Beitrags-Detail (Kommentare)
- Erstellen (Post)

Profil:
- Persönliche Daten
- Testimonial
- Tracking-Charts
- Einstellungen (Notifications, DSGVO, Logout)
```

### 5.2 Admin/CMS-Navigation (Web)

```
Sidebar:
1. Dashboard (Analytics)
2. Nutzer (CRUD, Rollen, Sperren)
3. Content (CRUD: Lektionen, PDFs, Videos, Worksheets, FAQ)
4. Rezepte (CRUD)
5. Quizzes (CRUD: Fragen, Antworten)
6. Challenge-Templates (Phasen, Farb-Tage, Day-N Plan)
7. Testimonials (Freigabe-Queue)
8. Community (Moderations-Queue)
9. Notifications (Push-Templates, Reminder-Texte)
10. Einstellungen (System, DSGVO-Logs, Export)
```

---

## 6. VOLLSTÄNDIGE SCREENLIST

### 6.1 Mobile App (Teilnehmer/Coach)

| # | Screen | Zweck | Inputs | Outputs |
|---|--------|-------|--------|---------|
| 1 | Splash | Branding, Ladezeit | - | - |
| 2 | Landing | Marketing, Login/Registrierung CTA | - | Navigation zu Login/Registrierung |
| 3 | Login | Anmeldung | E-Mail, Passwort | JWT-Token, Navigation zu Dashboard |
| 4 | Registrierung | Konto erstellen | E-Mail, Passwort, AGB/DSGVO Opt-in | User-ID, E-Mail-Verifizierung |
| 5 | E-Mail-Verifizierung | Bestätigung | Code (6-stellig) | Account aktiviert |
| 6 | Passwort vergessen | Reset-Flow | E-Mail | Reset-Link per E-Mail |
| 7 | Passwort zurücksetzen | Neues Passwort | Neues Passwort | Login möglich |
| 8 | Profil anlegen | Name, Avatar | Name, Avatar (optional) | Profil erstellt |
| 9 | Onboarding-Quiz | Gesundheitsdaten, Ziele | Antworten (Fragen) | Quiz-Ergebnis, Profil-Ergänzung |
| 10 | Programmauswahl | Programm wählen | Programmauswahl | Programm gewählt |
| 11 | Startdatum wählen | Challenge-Start | Datum (Kalender) | Challenge-Instanz erstellt |
| 12 | Dashboard | Übersicht Tag, Phase, Aufgaben | - | Aktueller Status, Navigation |
| 13 | Tagesübersicht | Farb-Tag, Regeln, Aufgaben | - | Regeln anzeigen |
| 14 | Check-in Dialog | Compliance-Fragen | Antworten (Skalen 1-10, Ja/Nein) | Check-in gespeichert, Streak +1 |
| 15 | Check-in Bestätigung | Feedback, Badge | - | Motivation |
| 16 | Content-Library | Lernpfade | - | Liste Module/Lektionen |
| 17 | Lektionsdetail | Content anzeigen | - | Video/PDF/Worksheet |
| 18 | Video-Player | Video abspielen | Play/Pause, Progress | Progress gespeichert |
| 19 | PDF-Viewer | PDF anzeigen | Scroll, Zoom | - |
| 20 | Worksheet | Interaktive Aufgaben | Text-Eingaben | Aufgabe gespeichert |
| 21 | Checkpoint-Bestätigung | Aufgabe erledigt | Checkbox | Lektion Fortschritt +1 |
| 22 | Quiz-Start | Quiz-Intro | - | Quiz-Fragen |
| 23 | Quiz-Frage | Frage anzeigen | Antwort (Single/Multi-Choice, Text) | Nächste Frage |
| 24 | Quiz-Ergebnis | Score, Feedback | - | Wiederholung oder weiter |
| 25 | Rezepte-Library | Rezepte filtern | Filter (Phase, Farb-Tag, Suche) | Liste Rezepte |
| 26 | Rezept-Detail | Zutaten, Zubereitung | - | Rezept anzeigen |
| 27 | Wochenplan | 7 Tage, Mahlzeiten | Rezepte zuweisen (Drag&Drop) | Wochenplan gespeichert |
| 28 | Einkaufsliste | Zutaten gruppiert | Abhaken | Liste als PDF/CSV export |
| 29 | Community-Tab | Themenräume | - | Liste Räume |
| 30 | Themenraum-Feed | Beiträge anzeigen | - | Liste Posts |
| 31 | Beitrag erstellen | Post verfassen | Text, Foto (optional) | Beitrag erstellt |
| 32 | Beitrags-Detail | Kommentare, Likes | Kommentar, Like, Melden | Interaktion gespeichert |
| 33 | Melden-Dialog | Grund angeben | Grund (Dropdown) | Meldung erstellt |
| 34 | Profil | Persönliche Daten | Name, Avatar, Bio | Profil gespeichert |
| 35 | Testimonial Upload | Vorher/Nachher Foto, Text | Fotos, Text, Consent | Testimonial zur Prüfung |
| 36 | Consent-Dialog | Nutzungsrechte | Checkbox | Consent gespeichert |
| 37 | Tracking-Charts | Verlauf anzeigen | Zeitraum (Filter) | Charts (Energie, Verdauung, etc.) |
| 38 | Tracking-Export | CSV/PDF Export | Format | Download |
| 39 | Einstellungen | Notifications, DSGVO | Toggle, Buttons | Einstellungen gespeichert |
| 40 | DSGVO-Export | Daten exportieren | - | ZIP-Download |
| 41 | Konto löschen | Bestätigung | Bestätigung | Account gelöscht |
| 42 | Coach-Dashboard | Teilnehmer-Übersicht | - | Liste Teilnehmer |
| 43 | Teilnehmer-Detail (Coach) | Fortschritt, Check-ins | - | Detailansicht |
| 44 | Coach-Nachricht | Nachricht senden | Text | Nachricht gesendet |

### 6.2 Admin/CMS (Web)

| # | Screen | Zweck | Inputs | Outputs |
|---|--------|-------|--------|---------|
| 1 | Admin-Login | CMS-Zugang | E-Mail, Passwort | JWT-Token, Navigation zu Dashboard |
| 2 | Admin-Dashboard | Analytics | - | KPIs (aktive Nutzer, Completion-Rates) |
| 3 | Nutzer-Liste | Nutzerverwaltung | Suche, Filter (Rolle) | Liste Nutzer |
| 4 | Nutzer-Detail | CRUD Nutzer | Name, E-Mail, Rolle, Status | Nutzer gespeichert |
| 5 | Content-Liste | Content-Übersicht | Suche, Filter (Typ) | Liste Content-Items |
| 6 | Content-Detail | CRUD Content | Titel, Beschreibung, Video/PDF-Upload, Typ | Content gespeichert |
| 7 | Rezepte-Liste | Rezepte-Übersicht | Suche, Filter | Liste Rezepte |
| 8 | Rezept-Detail | CRUD Rezept | Titel, Zutaten, Zubereitung, Foto, Phase, Farb-Tag | Rezept gespeichert |
| 9 | Quiz-Liste | Quizzes-Übersicht | Suche | Liste Quizzes |
| 10 | Quiz-Detail | CRUD Quiz | Titel, Fragen, Antworten, Lektion-Zuordnung | Quiz gespeichert |
| 11 | Challenge-Templates | Templates-Übersicht | - | Liste Templates |
| 12 | Template-Detail | CRUD Template | Phasen, Farb-Tage, Day-N Plan, Regeln | Template gespeichert |
| 13 | Testimonials-Queue | Freigabe-Liste | Filter (Status) | Liste Testimonials |
| 14 | Testimonial-Review | Freigabe/Ablehnung | Foto, Text, Consent, Aktion | Status aktualisiert |
| 15 | Community-Moderations-Queue | Gemeldete Beiträge | Filter (Status) | Liste Meldungen |
| 16 | Moderations-Detail | Aktion (Löschen, Freigeben, Blockieren) | Beitrag, Meldungen, Aktion | Status aktualisiert |
| 17 | Notifications-Templates | Push-Templates | Titel, Text, Trigger | Template gespeichert |
| 18 | DSGVO-Logs | Consent-/Lösch-Logs | Zeitraum, Filter | Liste Logs |
| 19 | System-Einstellungen | Konfiguration | Diverse | Settings gespeichert |

---

## 7. DATENMODELL

### 7.1 Entities, Felder, Beziehungen

#### User
```
id: UUID (PK)
email: String (unique, indexed)
password_hash: String (bcrypt)
role: Enum (participant, coach, moderator, admin)
status: Enum (active, blocked, deleted)
created_at: Timestamp
updated_at: Timestamp
email_verified: Boolean
email_verification_token: String (nullable)
password_reset_token: String (nullable)
password_reset_expires: Timestamp (nullable)
```

**Relations**:
- 1:1 → Profile
- 1:N → ChallengeInstance
- 1:N → CheckIn
- 1:N → QuizResult
- 1:N → MealPlan
- 1:N → CommunityPost
- 1:N → Testimonial
- 1:N → Consent
- N:M → User (Coach ↔ Participant via CoachAssignment)

#### Profile
```
id: UUID (PK)
user_id: UUID (FK → User, unique)
first_name: String
last_name: String
avatar_url: String (nullable)
bio: Text (nullable)
date_of_birth: Date (nullable)
health_data: JSONB (Onboarding-Quiz, verschlüsselt)
created_at: Timestamp
updated_at: Timestamp
```

#### Role / Permission (RBAC)
```
id: UUID (PK)
name: String (unique, z.B. "participant", "coach", "moderator", "admin")
permissions: JSONB (z.B. ["read:content", "write:content", "moderate:community"])
```

Annahme: Permissions als JSON-Array in Role gespeichert; alternativ separate Permission-Entity + N:M zu Role.

#### Program
```
id: UUID (PK)
name: String (z.B. "cellRESET-Metabolism")
description: Text
status: Enum (active, archived)
created_at: Timestamp
updated_at: Timestamp
```

**Relations**:
- 1:N → Phase

#### Phase
```
id: UUID (PK)
program_id: UUID (FK → Program)
name: String (z.B. "Vorbereitungsphase", "Aktivierungsphase")
sequence: Integer (Reihenfolge)
min_duration_days: Integer (z.B. 14)
max_duration_days: Integer (z.B. 30, nullable = unbegrenzt)
description: Text
created_at: Timestamp
updated_at: Timestamp
```

#### DayColorType
```
id: UUID (PK)
name: String (z.B. "Weiß", "Grün", "Rot")
color_code: String (Hex, z.B. "#FFFFFF")
rules: JSONB (z.B. {"no_salt": true, "no_sugar": true, "protein_focus": true})
description: Text
```

#### ChallengeTemplate
```
id: UUID (PK)
program_id: UUID (FK → Program)
name: String (z.B. "cellRESET Standard 28-Tage Aktivierung")
phases_config: JSONB (Array: [{"phase_id": UUID, "duration_days": 28, "day_plan": [...]}])
created_at: Timestamp
updated_at: Timestamp
version: Integer (für Versionierung)
```

Annahme: `phases_config` enthält Day-N Plan als JSON, z.B.:
```json
[
  {
    "phase_id": "uuid-aktivierung",
    "duration_days": 28,
    "day_plan": [
      {"day": 1, "color": "white", "tasks": ["task_id_1", "task_id_2"]},
      {"day": 2, "color": "white", "tasks": [...]},
      ...
      {"day": 8, "color": "green", "tasks": [...]},
      ...
    ]
  }
]
```

#### ChallengeInstance
```
id: UUID (PK)
user_id: UUID (FK → User)
challenge_template_id: UUID (FK → ChallengeTemplate)
start_date: Date
current_day: Integer (Day N, 1-basiert)
current_phase_id: UUID (FK → Phase)
status: Enum (scheduled, active, paused, completed, aborted)
created_at: Timestamp
updated_at: Timestamp
completed_at: Timestamp (nullable)
```

**Relations**:
- 1:N → CheckIn
- 1:N → DayPlan (alternativ: DayPlan aus Template generiert, nicht gespeichert)

Annahme: DayPlan wird beim Start aus ChallengeTemplate generiert und als JSON in ChallengeInstance gespeichert oder als separate Entity DayPlan.

#### DayPlan (optional, alternativ in ChallengeInstance.day_plan_json)
```
id: UUID (PK)
challenge_instance_id: UUID (FK → ChallengeInstance)
day_number: Integer (1-N)
date: Date (start_date + day_number - 1)
color_type_id: UUID (FK → DayColorType)
tasks: JSONB (Array: [{"task_id": UUID, "completed": false}])
created_at: Timestamp
```

#### CheckIn
```
id: UUID (PK)
user_id: UUID (FK → User)
challenge_instance_id: UUID (FK → ChallengeInstance)
day_number: Integer
date: Date
responses: JSONB (Fragen/Antworten, z.B. {"water_intake": 8, "chewing_32x": true, "energy_level": 7, "digestion_level": 6})
compliance: Boolean (alle Regeln eingehalten)
created_at: Timestamp
```

**Tracking-Dimensionen (in responses)**:
- Energie: 1-10
- Verdauung: 1-10
- Haut: 1-10
- Regeneration/Schlaf: 1-10
- Optional: Gewicht (kg), Umfänge (cm), etc.

#### ContentItem
```
id: UUID (PK)
type: Enum (video, pdf, worksheet, faq, article)
title: String
description: Text
content_url: String (Video/PDF URL, nullable)
content_data: JSONB (Worksheet-Felder, FAQ-Text, nullable)
phase_id: UUID (FK → Phase, nullable, für Phase-spezifische Inhalte)
sequence: Integer (Reihenfolge in Lernpfad)
status: Enum (draft, published, archived)
created_at: Timestamp
updated_at: Timestamp
version: Integer
```

**Relations**:
- 1:N → ContentProgress
- 1:N → Quiz (optional)

#### ContentProgress
```
id: UUID (PK)
user_id: UUID (FK → User)
content_item_id: UUID (FK → ContentItem)
status: Enum (not_started, in_progress, completed)
progress_pct: Integer (0-100, z.B. Video bei 60%)
last_position: Integer (Sekunden bei Video, Seite bei PDF)
completed_at: Timestamp (nullable)
created_at: Timestamp
updated_at: Timestamp
```

#### Quiz
```
id: UUID (PK)
title: String
description: Text
type: Enum (onboarding, knowledge, reflection)
content_item_id: UUID (FK → ContentItem, nullable, wenn nach Lektion)
passing_score_pct: Integer (z.B. 80%)
created_at: Timestamp
updated_at: Timestamp
```

**Relations**:
- 1:N → QuizQuestion

#### QuizQuestion
```
id: UUID (PK)
quiz_id: UUID (FK → Quiz)
question_text: Text
question_type: Enum (single_choice, multi_choice, text)
options: JSONB (Array: [{"id": "a", "text": "Option A", "correct": true}, ...])
sequence: Integer
created_at: Timestamp
updated_at: Timestamp
```

#### QuizResult
```
id: UUID (PK)
user_id: UUID (FK → User)
quiz_id: UUID (FK → Quiz)
answers: JSONB (Array: [{"question_id": UUID, "answer": "a"}, ...])
score_pct: Integer (0-100)
passed: Boolean
completed_at: Timestamp
created_at: Timestamp
```

#### Recipe
```
id: UUID (PK)
title: String
description: Text
phase_id: UUID (FK → Phase, nullable)
color_type_id: UUID (FK → DayColorType)
category: Enum (breakfast, lunch, dinner, snack, beverage)
ingredients: JSONB (Array: [{"name": "Hühnerbrust", "amount": 200, "unit": "g"}, ...])
instructions: Text
nutrition: JSONB ({"calories": 300, "protein": 40, "carbs": 10, "fat": 5})
image_url: String (nullable)
allergens: JSONB (Array: ["gluten", "lactose", ...])
source: Enum (official, user_contributed)
created_by: UUID (FK → User, nullable bei official)
status: Enum (draft, pending_review, published, rejected) (nur bei user_contributed)
reviewed_by: UUID (FK → User, nullable)
created_at: Timestamp
updated_at: Timestamp
```

#### MealPlan
```
id: UUID (PK)
user_id: UUID (FK → User)
challenge_instance_id: UUID (FK → ChallengeInstance, nullable)
week_start_date: Date
plan_data: JSONB (Array: [{"day": 1, "meals": [{"category": "breakfast", "recipe_id": UUID}, ...]}, ...])
created_at: Timestamp
updated_at: Timestamp
```

#### GroceryList
```
id: UUID (PK)
meal_plan_id: UUID (FK → MealPlan)
items: JSONB (Array: [{"ingredient": "Hühnerbrust", "amount": 800, "unit": "g", "checked": false, "category": "Fleisch"}, ...])
created_at: Timestamp
updated_at: Timestamp
```

#### Testimonial
```
id: UUID (PK)
user_id: UUID (FK → User)
before_media_url: String (Foto oder Video)
after_media_url: String (Foto oder Video)
before_media_type: Enum (photo, video)
after_media_type: Enum (photo, video)
text: Text
consent_id: UUID (FK → Consent)
status: Enum (draft, pending_review, approved, rejected, published, withdrawn)
reviewed_by: UUID (FK → User, Moderator, nullable)
reviewed_at: Timestamp (nullable)
rejection_reason: Text (nullable)
created_at: Timestamp
updated_at: Timestamp
published_at: Timestamp (nullable)
```

#### Consent
```
id: UUID (PK)
user_id: UUID (FK → User)
type: Enum (testimonial_usage, data_processing, marketing, push_notifications)
granted: Boolean
granted_at: Timestamp
withdrawn_at: Timestamp (nullable)
ip_address: String (für Audit)
user_agent: String (für Audit)
created_at: Timestamp
updated_at: Timestamp
```

#### CommunityRoom
```
id: UUID (PK)
name: String (z.B. "Allgemeine Fragen", "Rezepte", "Motivation")
description: Text
rules: Text
status: Enum (active, archived)
created_at: Timestamp
updated_at: Timestamp
```

#### CommunityPost
```
id: UUID (PK)
user_id: UUID (FK → User)
room_id: UUID (FK → CommunityRoom)
text: Text
image_url: String (nullable)
status: Enum (published, hidden, deleted)
created_at: Timestamp
updated_at: Timestamp
```

**Relations**:
- 1:N → CommunityComment
- 1:N → CommunityReport
- 1:N → CommunityLike

#### CommunityComment
```
id: UUID (PK)
post_id: UUID (FK → CommunityPost)
user_id: UUID (FK → User)
text: Text
status: Enum (published, hidden, deleted)
created_at: Timestamp
updated_at: Timestamp
```

#### CommunityLike
```
id: UUID (PK)
post_id: UUID (FK → CommunityPost)
user_id: UUID (FK → User)
created_at: Timestamp

UNIQUE (post_id, user_id)
```

#### CommunityReport
```
id: UUID (PK)
post_id: UUID (FK → CommunityPost, nullable)
comment_id: UUID (FK → CommunityComment, nullable)
reported_by: UUID (FK → User)
reason: Enum (spam, hate_speech, misinformation, other)
reason_text: Text (nullable)
status: Enum (pending, reviewed, dismissed)
reviewed_by: UUID (FK → User, Moderator, nullable)
reviewed_at: Timestamp (nullable)
action_taken: Enum (none, hidden, deleted, user_blocked, nullable)
created_at: Timestamp
updated_at: Timestamp
```

#### Badge
```
id: UUID (PK)
name: String (z.B. "7-Tage-Streak", "Quiz-Meister", "Aktivierung abgeschlossen")
description: Text
icon_url: String
criteria: JSONB (z.B. {"streak_days": 7} oder {"phase_completed": "activation"})
created_at: Timestamp
```

#### UserBadge
```
id: UUID (PK)
user_id: UUID (FK → User)
badge_id: UUID (FK → Badge)
earned_at: Timestamp
created_at: Timestamp

UNIQUE (user_id, badge_id)
```

#### Notification
```
id: UUID (PK)
user_id: UUID (FK → User)
type: Enum (push, in_app, email)
title: String
message: Text
data: JSONB (z.B. {"challenge_id": UUID, "day_number": 5})
status: Enum (pending, sent, read)
sent_at: Timestamp (nullable)
read_at: Timestamp (nullable)
created_at: Timestamp
```

#### NotificationTemplate
```
id: UUID (PK)
name: String (z.B. "Daily Check-in Reminder")
type: Enum (push, in_app, email)
trigger: Enum (time_based, event_based)
trigger_config: JSONB (z.B. {"time": "08:00", "days_before_event": 1})
title_template: String (mit Platzhaltern, z.B. "{{first_name}}, Zeit für deinen Check-in!")
message_template: Text
created_at: Timestamp
updated_at: Timestamp
```

#### CoachAssignment
```
id: UUID (PK)
coach_id: UUID (FK → User, role=coach)
participant_id: UUID (FK → User, role=participant)
assigned_at: Timestamp
created_at: Timestamp

UNIQUE (coach_id, participant_id)
```

#### SecurityLog
```
id: UUID (PK)
user_id: UUID (FK → User, nullable)
event_type: Enum (login, logout, password_reset, account_deletion, consent_granted, consent_withdrawn, failed_login)
ip_address: String
user_agent: String
metadata: JSONB (zusätzliche Infos)
created_at: Timestamp
```

---

## 8. API-DESIGN

### 8.1 Architektur

**Backend**: REST API (alternativ GraphQL für flexible Queries)
**Auth**: JWT (JSON Web Tokens) + Refresh Tokens
**RBAC**: Middleware prüft Role/Permissions pro Endpoint
**File Storage**: S3-kompatibel (AWS S3, Minio, Cloudflare R2)
**Notifications**: Push (Firebase Cloud Messaging oder APNs), In-App, E-Mail (SendGrid/Mailgun)

### 8.2 Auth-Endpoints

```
POST /api/v1/auth/register
Body: {email, password, consent: {terms: true, privacy: true}}
Response: {user_id, email, status: "pending_verification"}

POST /api/v1/auth/verify-email
Body: {email, code}
Response: {status: "verified", access_token, refresh_token}

POST /api/v1/auth/login
Body: {email, password}
Response: {access_token, refresh_token, user: {...}}

POST /api/v1/auth/refresh
Body: {refresh_token}
Response: {access_token}

POST /api/v1/auth/logout
Headers: Authorization: Bearer <token>
Response: {status: "logged_out"}

POST /api/v1/auth/forgot-password
Body: {email}
Response: {status: "reset_link_sent"}

POST /api/v1/auth/reset-password
Body: {token, new_password}
Response: {status: "password_reset"}
```

### 8.3 User/Profile-Endpoints

```
GET /api/v1/users/me
Headers: Authorization: Bearer <token>
Response: {user: {...}, profile: {...}}

PUT /api/v1/users/me/profile
Body: {first_name, last_name, avatar, bio}
Response: {profile: {...}}

POST /api/v1/users/me/avatar
Body: FormData (image file)
Response: {avatar_url}

DELETE /api/v1/users/me
Headers: Authorization: Bearer <token>
Response: {status: "account_deleted"}

GET /api/v1/users/me/export
Response: ZIP (JSON/CSV/PDF)
```

### 8.4 Program/Challenge-Endpoints

```
GET /api/v1/programs
Response: {programs: [{id, name, description, phases: [...]}]}

POST /api/v1/challenges
Body: {program_id, challenge_template_id, start_date}
Response: {challenge_instance: {...}}

GET /api/v1/challenges/me/active
Response: {challenge: {...}, current_day: 5, phase: {...}, day_plan: {...}}

PUT /api/v1/challenges/{id}/abort
Response: {status: "aborted"}

POST /api/v1/challenges/{id}/restart
Body: {start_date}
Response: {new_challenge_instance: {...}}
```

### 8.5 Check-in-Endpoints

```
POST /api/v1/check-ins
Body: {challenge_instance_id, day_number, date, responses: {...}}
Response: {check_in: {...}, streak: 7, badge: {...}}

GET /api/v1/check-ins/me
Query: ?challenge_instance_id=<uuid>&from_date=<date>&to_date=<date>
Response: {check_ins: [...]}

GET /api/v1/check-ins/me/stats
Response: {streak: 7, total_check_ins: 20, compliance_rate: 85, ...}
```

### 8.6 Content-Endpoints

```
GET /api/v1/content
Query: ?phase_id=<uuid>&type=<video|pdf>&status=published
Response: {content_items: [...]}

GET /api/v1/content/{id}
Response: {content_item: {...}, progress: {...}}

POST /api/v1/content/{id}/progress
Body: {progress_pct, last_position, status}
Response: {progress: {...}}

POST /api/v1/content/{id}/complete
Response: {progress: {...}, badge: {...}}
```

### 8.7 Quiz-Endpoints

```
GET /api/v1/quizzes/{id}
Response: {quiz: {...}, questions: [...]}

POST /api/v1/quizzes/{id}/submit
Body: {answers: [{question_id, answer}, ...]}
Response: {result: {score_pct, passed, feedback: [...]}}

GET /api/v1/quizzes/me/results
Response: {results: [...]}
```

### 8.8 Recipe-Endpoints

```
GET /api/v1/recipes
Query: ?phase_id=<uuid>&color_type_id=<uuid>&category=<breakfast>&allergens=<gluten,lactose>
Response: {recipes: [...]}

GET /api/v1/recipes/{id}
Response: {recipe: {...}}

POST /api/v1/meal-plans
Body: {week_start_date, plan_data: [{day, meals: [{category, recipe_id}]}]}
Response: {meal_plan: {...}}

GET /api/v1/meal-plans/me/current
Response: {meal_plan: {...}}

POST /api/v1/meal-plans/{id}/grocery-list
Response: {grocery_list: {...}}

PUT /api/v1/grocery-lists/{id}
Body: {items: [{ingredient, amount, unit, checked, category}]}
Response: {grocery_list: {...}}

GET /api/v1/grocery-lists/{id}/export
Query: ?format=<csv|pdf>
Response: File (CSV/PDF)
```

### 8.9 Testimonial-Endpoints

```
POST /api/v1/testimonials
Body: FormData (before_photo, after_photo, text, consent_granted: true)
Response: {testimonial: {...}, status: "pending_review"}

GET /api/v1/testimonials/me
Response: {testimonials: [...]}

PUT /api/v1/testimonials/{id}/withdraw
Response: {status: "withdrawn"}

GET /api/v1/testimonials/published
Query: ?limit=20&offset=0
Response: {testimonials: [...]}
```

### 8.10 Community-Endpoints

```
GET /api/v1/community/rooms
Response: {rooms: [...]}

GET /api/v1/community/rooms/{id}/posts
Query: ?limit=20&offset=0
Response: {posts: [...]}

POST /api/v1/community/posts
Body: {room_id, text, image}
Response: {post: {...}}

POST /api/v1/community/posts/{id}/comments
Body: {text}
Response: {comment: {...}}

POST /api/v1/community/posts/{id}/like
Response: {status: "liked"}

DELETE /api/v1/community/posts/{id}/like
Response: {status: "unliked"}

POST /api/v1/community/posts/{id}/report
Body: {reason, reason_text}
Response: {report: {...}}
```

### 8.11 Notification-Endpoints

```
GET /api/v1/notifications/me
Query: ?status=<pending|sent|read>&limit=20
Response: {notifications: [...]}

PUT /api/v1/notifications/{id}/read
Response: {status: "read"}

PUT /api/v1/notifications/read-all
Response: {status: "all_read"}

POST /api/v1/notifications/subscribe
Body: {device_token, platform: "ios|android"}
Response: {status: "subscribed"}
```

### 8.12 Coach-Endpoints

```
GET /api/v1/coaches/me/participants
Response: {participants: [{user: {...}, challenge: {...}, last_check_in: {...}}]}

GET /api/v1/coaches/me/participants/{id}
Response: {participant: {...}, check_ins: [...], progress: {...}}

POST /api/v1/coaches/me/participants/{id}/assign-challenge
Body: {challenge_template_id, start_date}
Response: {challenge_instance: {...}}

POST /api/v1/coaches/me/participants/{id}/message
Body: {text}
Response: {message: {...}}

GET /api/v1/coaches/me/reports
Query: ?from_date=<date>&to_date=<date>
Response: CSV/PDF (Compliance-Report)
```

### 8.13 Admin/CMS-Endpoints

```
# Nutzer-Verwaltung
GET /api/v1/admin/users
Query: ?role=<participant|coach>&status=<active|blocked>&limit=50&offset=0
Response: {users: [...]}

PUT /api/v1/admin/users/{id}
Body: {role, status}
Response: {user: {...}}

DELETE /api/v1/admin/users/{id}
Response: {status: "deleted"}

# Content-Verwaltung
POST /api/v1/admin/content
Body: {type, title, description, content_url, phase_id, sequence}
Response: {content_item: {...}}

PUT /api/v1/admin/content/{id}
Body: {...}
Response: {content_item: {...}}

DELETE /api/v1/admin/content/{id}
Response: {status: "deleted"}

# Rezepte-Verwaltung
POST /api/v1/admin/recipes
Body: {title, description, phase_id, color_type_id, category, ingredients, instructions, nutrition, image, allergens}
Response: {recipe: {...}}

PUT /api/v1/admin/recipes/{id}
Body: {...}
Response: {recipe: {...}}

# Quiz-Verwaltung
POST /api/v1/admin/quizzes
Body: {title, description, type, content_item_id, passing_score_pct, questions: [...]}
Response: {quiz: {...}}

# Challenge-Templates
POST /api/v1/admin/challenge-templates
Body: {program_id, name, phases_config}
Response: {template: {...}}

# Testimonials-Moderation
GET /api/v1/admin/testimonials/pending
Response: {testimonials: [...]}

PUT /api/v1/admin/testimonials/{id}/review
Body: {status: "approved|rejected", rejection_reason}
Response: {testimonial: {...}}

# Community-Moderation
GET /api/v1/admin/community/reports/pending
Response: {reports: [...]}

PUT /api/v1/admin/community/reports/{id}/review
Body: {action_taken: "none|hidden|deleted|user_blocked"}
Response: {report: {...}}

# Notifications-Verwaltung
POST /api/v1/admin/notification-templates
Body: {name, type, trigger, trigger_config, title_template, message_template}
Response: {template: {...}}

# Analytics
GET /api/v1/admin/analytics/overview
Response: {active_users: 1200, completion_rate: 68, avg_check_in_rate: 85, ...}

GET /api/v1/admin/analytics/quiz-results
Response: {avg_score: 82, pass_rate: 90, ...}

# DSGVO-Logs
GET /api/v1/admin/security-logs
Query: ?event_type=<login|consent_granted>&from_date=<date>&to_date=<date>
Response: {logs: [...]}
```

### 8.14 RBAC Enforcement

**Middleware**: Jeder Endpoint prüft JWT-Token → User-ID → Role → Permissions

**Beispiel**:
```
GET /api/v1/admin/users
→ JWT validieren
→ User-ID extrahieren
→ User.role prüfen
→ Wenn role != "admin" → 403 Forbidden
→ Sonst: Query ausführen
```

**Permissions-Matrix** (Beispiel):

| Endpoint | Participant | Coach | Moderator | Admin |
|----------|-------------|-------|-----------|-------|
| GET /api/v1/users/me | ✓ | ✓ | ✓ | ✓ |
| POST /api/v1/challenges | ✓ | ✗ | ✗ | ✗ |
| GET /api/v1/coaches/me/participants | ✗ | ✓ | ✗ | ✓ |
| GET /api/v1/admin/testimonials/pending | ✗ | ✗ | ✓ | ✓ |
| POST /api/v1/admin/content | ✗ | ✗ | ✗ | ✓ |

### 8.15 File Upload

**Flow**: 
1. Client → POST /api/v1/upload/presigned (file_name, content_type)
2. Server → generiert presigned URL (S3)
3. Client → PUT zu presigned URL (direkter Upload)
4. Client → POST /api/v1/testimonials (mit final URL)

**Sicherheit**:
- Max. File-Size: 10 MB (Fotos), 100 MB (Videos)
- Allowed Content-Types: image/jpeg, image/png, video/mp4
- EXIF-Daten entfernen (Privacy)
- Virus-Scan (optional, v2)

---

## 9. TECHNISCHE ARCHITEKTUR

### 9.1 Komponenten

```
[Mobile App (React Native)]
    ↓ HTTPS + JWT
[API Gateway / Load Balancer]
    ↓
[Backend API (Node.js/Express oder NestJS)]
    ↓
[Database (PostgreSQL)]
[Cache (Redis)]
[File Storage (S3-kompatibel)]
[Queue (RabbitMQ/Redis für Notifications)]
[Push Service (FCM/APNs)]
[Email Service (SendGrid)]

[Admin/CMS (React + Admin-Panel Framework, z.B. React-Admin)]
    ↓ HTTPS + JWT
[Backend API (shared with Mobile)]
```

### 9.2 Mobile App

**Framework**: React Native (iOS + Android, Code-Sharing max.)
**State Management**: Redux Toolkit oder Zustand
**Networking**: Axios (mit Interceptors für JWT-Refresh)
**Offline-Fähigkeit**: Redux Persist + Queue für Sync bei Reconnect
**Push Notifications**: React Native Firebase (FCM) + APNs
**UI-Komponenten**: React Native Paper oder Native Base (Material Design / iOS Human Interface)
**Navigation**: React Navigation (Stack + Tab)
**Charts**: Victory Native oder Recharts (für Tracking-Visualisierung)
**File Upload**: react-native-image-picker + react-native-fs

**Annahme**: MVP startet nur mit Mobile (iOS + Android); Web-Version als v2 Backlog.

### 9.3 Backend API

**Framework**: Node.js + NestJS (TypeScript, modulare Architektur, RBAC-Decorators)
**Alternativen**: Express.js (leichtgewichtiger), FastAPI (Python, falls AI/ML-Integration geplant)
**Database**: PostgreSQL (relationale Daten, JSONB für flexible Felder)
**ORM**: TypeORM oder Prisma
**Auth**: Passport.js (JWT Strategy) + bcrypt (Password Hashing)
**Validation**: class-validator + class-transformer
**File Storage**: AWS SDK (S3) oder Minio (self-hosted)
**Queue**: BullMQ (Redis-basiert, für Background-Jobs: Push-Notifications, E-Mail-Versand, Analytics)
**Logging**: Winston oder Pino (strukturiertes Logging, ELK-Stack-Ready)
**Monitoring**: Sentry (Error Tracking), Prometheus + Grafana (Metriken)

### 9.4 Admin/CMS

**Framework**: React + React-Admin (oder Refine, für schnelles CRUD)
**Backend**: shared API (separate Admin-Endpoints mit role=admin)
**Features**:
- CRUD für Content, Rezepte, Quizzes, Challenge-Templates
- Freigabe-Queues (Testimonials, Community-Moderation)
- Analytics-Dashboard (Charts: active users, completion rates)
- Notification-Templates-Editor (mit Vorschau)
- DSGVO-Logs-Viewer

**Annahme**: Admin/CMS ist Web-basiert (nicht mobile-optimiert nötig).

### 9.5 Datenbank

**PostgreSQL** (Version 14+):
- Tabellen: siehe Datenmodell
- Indizes: 
  - User.email (unique, für schnelle Lookup)
  - ChallengeInstance.user_id + status (für aktive Challenges)
  - CheckIn.user_id + date (für Timeline)
  - ContentProgress.user_id + content_item_id (für Progress-Tracking)
- Partitionierung: CheckIn, SecurityLog (nach Monat, falls Datenmenge groß)
- Backups: tägliche automatische Backups, 30 Tage Retention

**Alternativen**:
- MySQL/MariaDB (wenn PostgreSQL-Features nicht benötigt)
- NoSQL (MongoDB) als Ergänzung für Analytics/Logs (v2)

### 9.6 Cache

**Redis**:
- Session-Cache (JWT Blacklist bei Logout)
- Content-Cache (häufig abgerufene Content-Items, Rezepte)
- Rate-Limiting (z.B. max. 100 API-Calls/Minute pro User)
- TTL: 15 Minuten für Content, 1 Stunde für Rezepte

### 9.7 File Storage

**S3-kompatibel** (AWS S3, Minio, Cloudflare R2):
- Buckets:
  - `cellreset-content` (Videos, PDFs, Worksheets)
  - `cellreset-user-uploads` (Avatars, Testimonial-Fotos, Community-Fotos)
  - `cellreset-exports` (DSGVO-Exports, temp. CSV/PDF)
- CDN: CloudFront (AWS) oder Cloudflare (für schnelle Auslieferung)
- Retention: User-Uploads 90 Tage nach Account-Löschung löschen

### 9.8 Notifications

**Push**:
- Firebase Cloud Messaging (Android + iOS)
- Zentraler Notification-Service (Backend) → Queue → FCM/APNs
- Scheduling: BullMQ (z.B. "Daily Check-in Reminder" um 08:00 Uhr)

**In-App**:
- Polling (GET /api/v1/notifications/me alle 60 Sekunden) oder WebSocket (v2)

**E-Mail**:
- SendGrid oder Mailgun
- Templates: Passwort-Reset, E-Mail-Verifizierung, Weekly-Summary

### 9.9 Security

**Auth**:
- JWT Access Token (15 Minuten TTL, claims: user_id, role)
- JWT Refresh Token (30 Tage TTL, stored in DB mit Revoke-Option)
- HTTPS only (TLS 1.3)
- Rate-Limiting (max. 100 Requests/Minute pro User)

**RBAC**:
- Middleware prüft Role/Permissions pro Endpoint
- Least Privilege (Teilnehmer sieht nur eigene Daten; Coach nur zugewiesene Teilnehmer)

**Data Protection**:
- Passwörter: bcrypt (cost factor 12)
- Sensitive Daten (Gesundheitsdaten): verschlüsselt in DB (AES-256, Key in Secrets Manager)
- EXIF-Daten aus Fotos entfernen
- DSGVO-Logs: Consent, Löschungen, Zugriffe auf sensitive Daten

**Audit**:
- SecurityLog (Login, Logout, Password-Reset, Account-Deletion, Consent-Changes)
- Retention: 2 Jahre (DSGVO-konform)

### 9.10 Deployment

**Infrastruktur**:
- Cloud: AWS (EC2/ECS/EKS), Google Cloud (GKE), oder DigitalOcean (Kubernetes)
- Container: Docker (Backend, CMS)
- Orchestrierung: Kubernetes (für Skalierung) oder Docker Compose (MVP)

**CI/CD**:
- GitHub Actions oder GitLab CI
- Pipeline: Lint → Test → Build → Deploy
- Environments: Dev, Staging, Production

**Monitoring**:
- Sentry (Error Tracking)
- Prometheus + Grafana (Metriken: API-Latenz, DB-Queries, User-Activity)
- CloudWatch (AWS) oder Stackdriver (GCP)

---

## 10. UMSETZUNGS-BACKLOG (2-Wochen-Sprints)

### 10.1 MVP (Must-Have, ca. 12-16 Wochen)

#### Sprint 1-2: Foundation + Auth
- Setup: Repo, Docker, CI/CD, PostgreSQL, Redis, S3
- Backend: User, Profile, Role (RBAC), Auth-Endpoints (Register, Login, Verify, Logout, Password-Reset)
- Mobile: Splash, Landing, Login, Registrierung, E-Mail-Verifizierung, Passwort-Reset
- Admin/CMS: Login, User-Liste, User-Detail (CRUD)

#### Sprint 3-4: Program + Challenge-Engine
- Backend: Program, Phase, DayColorType, ChallengeTemplate, ChallengeInstance, DayPlan-Generator
- Mobile: Programmauswahl, Startdatum wählen, Dashboard (Day N, Farb-Tag, Phase)
- Admin/CMS: Challenge-Templates (CRUD), Phase-Konfiguration

#### Sprint 5-6: Daily Check-in + Tracking
- Backend: CheckIn, Tracking-Dimensionen (Energie, Verdauung, Haut, Schlaf), Streak-Logik
- Mobile: Tagesübersicht, Check-in Dialog, Check-in Bestätigung, Streak anzeigen
- Backend: Notifications (Push-Setup, Daily-Reminder)
- Mobile: Push-Notifications-Integration (FCM/APNs)

#### Sprint 7-8: Content + Quiz
- Backend: ContentItem, ContentProgress, Quiz, QuizQuestion, QuizResult
- Mobile: Content-Library, Lektionsdetail (Video-Player, PDF-Viewer), Checkpoint-Bestätigung, Quiz-Flow
- Admin/CMS: Content-CRUD, Quiz-CRUD

#### Sprint 9-10: Rezepte + Wochenplan
- Backend: Recipe, MealPlan, GroceryList
- Mobile: Rezepte-Library (Filter), Rezept-Detail, Wochenplan (Drag&Drop), Einkaufsliste (generieren, Export CSV/PDF)
- Admin/CMS: Rezepte-CRUD

#### Sprint 11-12: Testimonials + Community
- Backend: Testimonial, Consent, CommunityRoom, CommunityPost, CommunityComment, CommunityLike, CommunityReport
- Mobile: Testimonial-Upload (Foto, Text, Consent), Community-Tab, Themenraum-Feed, Beitrag erstellen, Melden
- Admin/CMS: Testimonials-Freigabe-Queue, Community-Moderations-Queue

#### Sprint 13-14: Coach-Features + MVP-Testing
- Backend: CoachAssignment, Coach-Endpoints (Participants, Assign-Challenge, Message)
- Mobile: Coach-Dashboard, Teilnehmer-Detail, Nachricht senden
- Testing: End-to-End, Bug-Fixes, Performance-Optimierung
- Deployment: Staging → Production

### 10.2 v1 (Should-Have, ca. 8-12 Wochen)

#### Sprint 15-16: Gamification
- Backend: Badge, UserBadge, Badge-Logik (Trigger: Streak, Phase-Completion, Quiz-Success)
- Mobile: Badge-Anzeige (Dashboard, Profil), Milestone-Celebrations (Animationen)

#### Sprint 17-18: Tracking-Charts + Export
- Backend: Tracking-Stats-Aggregation, CSV/PDF-Export
- Mobile: Tracking-Charts (Victory Native), Export (DSGVO-Export, CSV/PDF)

#### Sprint 19-20: Erweiterte Notifications + In-App-Messaging
- Backend: NotificationTemplate, Event-based Triggers (z.B. "Phase-Wechsel", "Quiz nicht bestanden")
- Mobile: In-App-Notification-Center, Read/Unread-Status
- Backend: Coach-Participant-Messaging (bidirektional)

#### Sprint 21-22: Community-Erweiterungen
- Backend: CommunityComment-Moderation, Like-Statistiken
- Mobile: Kommentare, Likes, User-Profile (öffentlich, optional), Follow-Feature (v2)

#### Sprint 23-24: Admin-Analytics + Reporting
- Backend: Analytics-Aggregation (active users, completion rates, quiz scores)
- Admin/CMS: Analytics-Dashboard (Charts), Export (Reports als CSV/PDF)

#### Sprint 25-26: Polishing + Bugfixes
- UI/UX-Verbesserungen (basierend auf User-Feedback)
- Performance-Optimierung (API-Latenz, Mobile-App-Ladezeiten)
- Accessibility (WCAG 2.1 AA, z.B. Screen-Reader-Support)

### 10.3 v2 (Nice-to-Have, Backlog)

#### Erweiterungen (je 2-4 Wochen)
- Multi-Programm-Fähigkeit (z.B. cellRESET-Sport, cellRESET-Business)
- Offline-Modus (Redux Persist, Background-Sync)
- Wearable-Integrationen (Apple Health, Google Fit, Garmin)
- AI-Moderation (Foto-Content-Filter, Text-Sentiment-Analyse)
- SSO (OAuth2: Google, Apple, Facebook)
- Web-App (PWA) für Desktop-Nutzung
- Video-Upload (Teilnehmer-Testimonials als Video)
- Live-Chat (Coach ↔ Participant, WebSocket)
- Internationalisierung (i18n): Englisch, Französisch, Italienisch
- Erweiterte Analytics (Funnel-Analyse, Retention-Cohorts)

---

## 11. AKZEPTANZKRITERIEN PRO MVP-FEATURE

### Auth/Onboarding
- ✅ Registrierung mit E-Mail + Passwort erstellt User mit status="pending_verification"
- ✅ E-Mail-Verifizierung mit Code aktiviert Account
- ✅ Login mit verifizierten Credentials liefert JWT-Token
- ✅ Passwort-Reset-Flow sendet E-Mail mit Link, neues Passwort wird gespeichert
- ✅ Onboarding-Quiz speichert Antworten in Profile.health_data (verschlüsselt)
- ✅ Programm wählen + Startdatum festlegen erstellt ChallengeInstance mit status="scheduled"

### Challenge-Engine
- ✅ Challenge startet automatisch an Day 1 (Status: "scheduled" → "active")
- ✅ Day-N Plan wird aus ChallengeTemplate generiert (28 Tage Aktivierungsphase, korrekte Farb-Tage)
- ✅ Abbruch setzt Status auf "aborted", Daten bleiben erhalten
- ✅ Restart erstellt neue ChallengeInstance, alte wird archiviert
- ✅ Wiederholung Aktivierungsphase aus Stabilisierungsphase möglich

### Daily Check-in
- ✅ Check-in am richtigen Tag speichert Antworten in CheckIn.responses
- ✅ Streak +1 bei täglichem Check-in, bricht bei Auslassen
- ✅ Compliance-Fragen (Wasser, Kauen, Abstand) werden korrekt ausgewertet
- ✅ Vitalcheck-Skalen (Energie, Verdauung, Haut, Schlaf) als 1-10 gespeichert
- ✅ Push-Notification um 08:00 Uhr (konfigurierbar) erinnert an Check-in

### Content + Quiz
- ✅ Content-Library zeigt nur veröffentlichte Inhalte (status="published")
- ✅ Video-Player trackt Progress (last_position, progress_pct)
- ✅ PDF-Viewer zeigt Content korrekt
- ✅ Checkpoint-Bestätigung setzt ContentProgress.status="completed"
- ✅ Quiz nach Lektion: Fragen nacheinander, Score berechnet, Feedback angezeigt
- ✅ Quiz nicht bestanden (Score < passing_score_pct) → Wiederholung möglich

### Rezepte + Wochenplan
- ✅ Rezepte-Filter (Phase, Farb-Tag, Kategorie, Allergene) funktioniert
- ✅ Rezept-Detail zeigt Zutaten, Zubereitung, Nährwerte, Foto
- ✅ Wochenplan: Rezepte per Drag&Drop zu Tag/Mahlzeit zuweisen
- ✅ Einkaufsliste generiert aus Wochenplan (Zutaten aggregiert, Duplikate gemerged)
- ✅ Export Einkaufsliste als CSV/PDF funktioniert

### Testimonials
- ✅ Upload Vorher/Nachher Foto + Text + Consent erstellt Testimonial mit status="pending_review"
- ✅ EXIF-Daten werden aus Fotos entfernt
- ✅ Moderator sieht Testimonials-Queue, kann freigeben/ablehnen
- ✅ Freigabe setzt status="approved", optional "published"
- ✅ Widerruf nach Freigabe blendet Testimonial aus, Consent-Log wird erstellt

### Community
- ✅ Beitrag erstellen (Text, Foto optional) in Themenraum
- ✅ Kommentare zu Beiträgen möglich
- ✅ Likes (max. 1 pro User pro Post)
- ✅ Melden-Button erstellt CommunityReport mit status="pending"
- ✅ Moderator sieht Moderations-Queue, kann Beitrag löschen/ausblenden/freigeben
- ✅ User blockieren verhindert weitere Posts/Kommentare

### Coach-Features
- ✅ Coach sieht nur zugewiesene Teilnehmer (via CoachAssignment)
- ✅ Teilnehmer-Detail zeigt aktuelle Challenge, letzte Check-ins, Progress
- ✅ Coach kann Challenge starten (Programm, Startdatum) für Teilnehmer
- ✅ Nachricht senden erstellt Notification (In-App + optional Push)

### Admin/CMS
- ✅ Admin kann Content (Video, PDF, Worksheet) anlegen/bearbeiten/löschen
- ✅ Content-Versionierung: aktuelle Version wird sofort in App angezeigt
- ✅ Challenge-Templates konfigurieren (Phasen, Farb-Tage, Day-N Plan)
- ✅ Rezepte CRUD funktioniert
- ✅ Quiz CRUD (Fragen, Antworten, Lektion-Zuordnung)
- ✅ Testimonials-Freigabe-Queue zeigt pending Testimonials
- ✅ Community-Moderations-Queue zeigt gemeldete Beiträge
- ✅ Nutzer-Verwaltung (Rollen, Sperren, Löschen)

### DSGVO
- ✅ Daten-Export (GET /api/v1/users/me/export) liefert ZIP mit JSON/CSV/PDF
- ✅ Konto-Löschung (DELETE /api/v1/users/me) löscht alle personenbezogenen Daten
- ✅ Consent-Widerruf möglich (z.B. Testimonial-Consent)
- ✅ SecurityLog erfasst Login, Logout, Password-Reset, Account-Deletion, Consent-Changes

### Security
- ✅ JWT Access Token (15 Min TTL), Refresh Token (30 Tage TTL, revocable)
- ✅ RBAC: Participant sieht nur eigene Daten, Coach nur zugewiesene Teilnehmer, Admin alles
- ✅ Rate-Limiting (max. 100 Requests/Minute pro User)
- ✅ Passwörter bcrypt (cost 12), health_data verschlüsselt (AES-256)
- ✅ HTTPS only (TLS 1.3)

---

## 12. OFFENE FRAGEN (Entscheidend für Implementierung)

### Priorität 1 (MVP-relevant)

1. **Startdatum-Logik**: Kann ein Teilnehmer mehrere parallele Challenges starten (z.B. cellRESET + später anderes Programm), oder ist immer nur eine Challenge pro User aktiv?
   - **Entscheidung**: Multiple Challenges pro User möglich (optional).

2. **Vorbereitungsphase-Dauer**: Wer legt die Dauer fest (14-30 Tage)? User wählt im Onboarding, oder Admin/Coach setzt?
   - **Annahme**: Admin konfiguriert im Template (z.B. Standard 14 Tage, optional verlängerbar durch Coach).

3. **Farb-Tag-Compliance**: Was passiert bei Non-Compliance (z.B. Salz an weißem Tag)? Nur Tracking, oder Streak-Abbruch?
   - **Entscheidung**: Nur Tracking als "non_compliant", Streak bricht nicht ab. Hinweis an User: "Je mehr Du Dich an das Konzept hältst, desto besser wirkt das Konzept".

4. **Quiz-Wiederholungen**: Unbegrenzt oder max. 3 Versuche? Falls nicht bestanden, bleibt Lektion gesperrt?
   - **Entscheidung**: Unbegrenzt Wiederholungen.

5. **Wochenplan-Automatisierung**: Soll MVP bereits automatische Wochenplan-Vorschläge bieten (KI/Algorithmus), oder nur manuelles Zusammenstellen?
   - **Annahme**: MVP manuell; automatische Vorschläge als v1/v2 Feature.

6. **Testimonial-Freigabe**: Welche Rolle gibt frei? Moderator oder Admin, oder beide?
   - **Annahme**: Moderator + Admin (beide haben Rechte).

7. **Community-Moderation**: Automatische Filter (z.B. Schimpfwörter) vor Veröffentlichung, oder nur manuelle Moderation nach Meldung?
   - **Annahme**: MVP nur manuelle Moderation nach Meldung; automatische Filter (AI) als v2.

8. **Coach-Zuordnung**: Wie werden Coaches zu Teilnehmern zugeordnet? Admin manuell, oder Self-Service (Teilnehmer wählt Coach)?
   - **Annahme**: MVP Admin manuell (CoachAssignment); Self-Service als v1.

### Priorität 2 (v1-relevant)

9. **Offline-Modus**: Welche Funktionen müssen offline verfügbar sein (Check-in, Content-Consumption)? Sync-Strategie?
   - **Annahme**: v1 Feature; mindestens Check-in + Content-Viewing offline, Sync bei Reconnect.

10. **Multi-Programm**: Wie unterscheiden sich Programme technisch (nur Content/Rezepte, oder auch Phasen/Farb-Tage)?
    - **Annahme**: v2; jedes Programm hat eigene Phase/Farb-Tag-Konfiguration.

11. **Gamification-Kriterien**: Welche Badges soll MVP enthalten (7-Tage-Streak, Aktivierung abgeschlossen)? Weitere Badges v1?
    - **Annahme**: MVP nur 2-3 Basis-Badges; erweiterte Gamification v1.

12. **Tracking-Export**: Welche Formate (CSV, PDF, JSON)? Welche Daten inkludiert (nur Check-ins, oder auch Content-Progress, Quiz)?
    - **Annahme**: MVP CSV + PDF (Check-ins + Tracking-Dimensionen); erweitert in v1.

### Priorität 3 (v2/Nice-to-Have)

13. **Wearable-Integration**: Welche Wearables Priorität (Apple Health, Google Fit, Garmin, Fitbit)?
    - **Annahme**: v2; Apple Health + Google Fit als Start.

14. **Internationalisierung**: Welche Sprachen außer Deutsch (Englisch, Französisch, Italienisch)?
    - **Annahme**: v2; zunächst Englisch, dann weitere.

15. **Video-Testimonials**: Sollen Teilnehmer auch Videos hochladen (nicht nur Fotos)?
    - **Entscheidung**: Ja, auch Videos (MVP).

---

## 13. ZUSAMMENFASSUNG

Diese Product Spec definiert eine vollständige Mobile-App + Backend + CMS für das cellRESET-Stoffwechselprogramm mit:

- **4 Rollen** (Teilnehmer, Coach, Moderator, Admin)
- **4 Phasen** (Vorbereitung, Aktivierung, Stabilisierung, Lifestyle)
- **3 Farb-Tage** (Weiß, Grün, Rot) mit spezifischen Regeln
- **Challenge-Engine** mit Day-N-Plan, Tracking, Gamification
- **Content-Library** (Video, PDF, Worksheet, Quiz)
- **Rezepte + Wochenplan + Einkaufsliste**
- **Testimonials** (Foto-Upload, Consent, Freigabe)
- **Community** (Themenräume, Moderation)
- **Coach-Features** (Teilnehmer-Übersicht, Onboarding, Messaging)
- **Admin/CMS** (Content-CRUD, Challenge-Templates, Freigabe-Queues, Analytics)
- **DSGVO-konform** (Consent, Löschung, Export, Security-Logs)

**MVP-Dauer**: 12-16 Wochen (2-Wochen-Sprints)
**v1**: +8-12 Wochen (Gamification, Charts, erweiterte Notifications)
**v2**: Backlog (Multi-Programm, Offline, Wearables, i18n)

**Technologie-Stack**:
- Mobile: React Native
- Backend: Node.js (NestJS) + PostgreSQL + Redis + S3
- Admin/CMS: React + React-Admin
- Notifications: FCM/APNs + SendGrid
- Deployment: Docker + Kubernetes (oder Docker Compose MVP)

**Nächste Schritte**:
1. Offene Fragen (Priorität 1) klären mit Stakeholdern
2. Design-Phase starten (UI/UX-Wireframes, Flows)
3. Setup (Repo, Infrastruktur, CI/CD)
4. Sprint 1 kickoff (Auth + Foundation)

---

**Annahmen-Log**:
- MVP nur 1 aktive Challenge pro User
- Vorbereitungsphase-Dauer von Admin konfiguriert (Standard 14 Tage)
- Non-Compliance trackt, aber bricht Streak nicht ab
- Quiz-Wiederholungen unbegrenzt
- Wochenplan MVP manuell (automatische Vorschläge v1/v2)
- Testimonial-Freigabe durch Moderator + Admin
- Community-Moderation MVP nur manuell (AI-Filter v2)
- Coach-Zuordnung MVP durch Admin (Self-Service v1)
- Offline-Modus v1
- Multi-Programm v2
- MVP 2-3 Basis-Badges (erweitert v1)
- Tracking-Export MVP CSV + PDF (Check-ins + Tracking-Dimensionen)
- Wearable-Integration v2 (Apple Health + Google Fit Start)
- i18n v2 (zunächst Englisch)
- Video-Testimonials v2

---
