import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/lib/store';
import { userService } from '@/services/user.service';

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.profile) {
      setFirstName(user.profile.first_name || '');
      setLastName(user.profile.last_name || '');
      setBio(user.profile.bio || '');
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await userService.updateProfile({
        first_name: firstName,
        last_name: lastName,
        bio,
      });
      setSuccess('Profil erfolgreich aktualisiert!');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Fehler beim Speichern');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const response = await userService.exportData();
      const blob = new Blob([JSON.stringify(response.data, null, 2)], {
        type: 'application/json',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cellreset-data-${Date.now()}.json`;
      a.click();
    } catch (err) {
      alert('Fehler beim Export');
    }
  };

  const handleDelete = async () => {
    if (!confirm('Möchtest du deinen Account wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
      return;
    }

    try {
      await userService.deleteAccount();
      clearAuth();
      window.location.href = '/';
    } catch (err) {
      alert('Fehler beim Löschen');
    }
  };

  const handleLogout = () => {
    clearAuth();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard">
            <h1 className="text-2xl font-bold text-primary">cellRESET</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Abmelden
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">Mein Profil</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Persönliche Daten</CardTitle>
            <CardDescription>Aktualisiere deine Profilinformationen</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" value={user?.email} disabled />
                <p className="text-xs text-gray-500">E-Mail kann nicht geändert werden</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Erzähle uns etwas über dich..."
                />
              </div>

              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
                  {error}
                </div>
              )}

              {success && (
                <div className="p-3 text-sm text-green-600 bg-green-50 rounded-md">
                  {success}
                </div>
              )}

              <Button type="submit" disabled={loading}>
                {loading ? 'Speichern...' : 'Speichern'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>DSGVO / Datenschutz</CardTitle>
            <CardDescription>Deine Daten verwalten</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Button variant="outline" onClick={handleExport}>
                Daten exportieren (JSON)
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                Exportiere alle deine Daten als JSON-Datei
              </p>
            </div>

            <div className="pt-4 border-t">
              <Button variant="destructive" onClick={handleDelete}>
                Account löschen
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                Achtung: Diese Aktion kann nicht rückgängig gemacht werden!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rollen & Berechtigungen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {user?.roles?.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
