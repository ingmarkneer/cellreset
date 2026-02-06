import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/lib/store';

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const handleLogout = () => {
    clearAuth();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">cellRESET</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {user?.profile?.first_name || user?.email}
            </span>
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                Profil
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Abmelden
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Willkommen zurück, {user?.profile?.first_name || 'Teilnehmer'}!
          </h2>
          <p className="text-gray-600">Hier ist deine Übersicht</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Deine Challenge</CardTitle>
              <CardDescription>Starte dein Programm</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Challenge starten</Button>
              <p className="text-sm text-gray-500 mt-2">
                Noch keine aktive Challenge. Starte jetzt!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lernpfade</CardTitle>
              <CardDescription>Videos, PDFs, Worksheets</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Zu den Lernpfaden
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rezepte</CardTitle>
              <CardDescription>Über 200 Rezepte</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Rezepte entdecken
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>Austausch & Support</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Zur Community
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dein Fortschritt</CardTitle>
              <CardDescription>Tracking & Charts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Fortschritt ansehen
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Testimonials</CardTitle>
              <CardDescription>Teile deine Erfolge</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Testimonial hochladen
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">0</p>
                  <p className="text-sm text-gray-600">Tage Streak</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">0</p>
                  <p className="text-sm text-gray-600">Badges</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">0</p>
                  <p className="text-sm text-gray-600">Lektionen</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">0%</p>
                  <p className="text-sm text-gray-600">Fortschritt</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">🎉 Nächste Schritte</h3>
          <ul className="space-y-2 text-sm">
            <li>✓ Account erstellt</li>
            <li>→ Profil vervollständigen</li>
            <li>→ Challenge starten</li>
            <li>→ Erste Lektion absolvieren</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
