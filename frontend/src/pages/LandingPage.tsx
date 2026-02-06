import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">cellRESET</h1>
        <div className="space-x-4">
          <Link to="/login">
            <Button variant="ghost">Anmelden</Button>
          </Link>
          <Link to="/register">
            <Button>Registrieren</Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-gray-900">
            Dein Stoffwechselprogramm für nachhaltigen Erfolg
          </h2>
          <p className="text-xl text-gray-600">
            cellRESET begleitet dich durch ein strukturiertes Programm mit Lernpfaden,
            täglichen Check-ins, Rezepten und Community-Support.
          </p>
          <Link to="/register">
            <Button size="lg" className="text-lg px-8 py-6">
              Jetzt starten
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <Card>
            <CardHeader>
              <CardTitle>📚 Strukturierte Lernpfade</CardTitle>
              <CardDescription>
                Videos, PDFs, Worksheets und Quizzes führen dich durch das Programm
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Tägliche Check-ins</CardTitle>
              <CardDescription>
                Tracke deinen Fortschritt mit Farb-Tagen (Weiß, Grün, Rot) und Vitalchecks
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🍽️ Rezepte & Wochenpläne</CardTitle>
              <CardDescription>
                Über 200 Rezepte passend zu deiner Phase, mit automatischer Einkaufsliste
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>👥 Community & Support</CardTitle>
              <CardDescription>
                Austausch in Themenräumen, Testimonials und Coach-Begleitung
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎯 Gamification</CardTitle>
              <CardDescription>
                Badges, Streaks und Milestones halten dich motiviert
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔒 DSGVO-konform</CardTitle>
              <CardDescription>
                Deine Daten sind sicher, jederzeit exportierbar oder löschbar
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-24 text-center space-y-4">
          <h3 className="text-3xl font-bold">Die 4 Phasen</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Vorbereitung</CardTitle>
                <CardDescription>14-30 Tage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mentale und körperliche Vorbereitung auf das Programm
                </p>
              </CardContent>
            </Card>

            <Card className="ring-2 ring-primary">
              <CardHeader>
                <CardTitle>Aktivierung</CardTitle>
                <CardDescription>28 Tage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Intensive Phase mit weißen und grünen Tagen
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stabilisierung</CardTitle>
                <CardDescription>90+ Tage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Festigung der neuen Gewohnheiten
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lifestyle</CardTitle>
                <CardDescription>Lebenslang</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Nachhaltiger Erfolg durch Integration in den Alltag
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-24 border-t text-center text-gray-600">
        <p>&copy; 2026 cellRESET. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
