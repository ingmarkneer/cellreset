import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { authService } from '@/services/auth.service';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== passwordConfirm) {
      setError('Passwörter stimmen nicht überein');
      return;
    }

    if (password.length < 8) {
      setError('Passwort muss mindestens 8 Zeichen lang sein');
      return;
    }

    if (!termsAccepted || !privacyAccepted) {
      setError('Bitte akzeptiere die AGB und Datenschutzerklärung');
      return;
    }

    setLoading(true);

    try {
      await authService.register({
        email,
        password,
        consent: {
          terms: termsAccepted,
          privacy: privacyAccepted,
        },
      });
      setSuccess('Registrierung erfolgreich! Bitte prüfe deine E-Mails für den Verifizierungscode.');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registrierung fehlgeschlagen. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <Link to="/" className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-2">cellRESET</h1>
          </Link>
          <CardTitle className="text-2xl text-center">Registrieren</CardTitle>
          <CardDescription className="text-center">
            Erstelle deinen Account und starte deine Challenge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="deine@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mindestens 8 Zeichen"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">Passwort bestätigen</Label>
              <Input
                id="passwordConfirm"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1"
                  required
                />
                <Label htmlFor="terms" className="text-sm font-normal leading-tight">
                  Ich akzeptiere die{' '}
                  <a href="/terms" className="text-primary hover:underline">
                    AGB
                  </a>
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1"
                  required
                />
                <Label htmlFor="privacy" className="text-sm font-normal leading-tight">
                  Ich akzeptiere die{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>
                </Label>
              </div>
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

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Registrierung läuft...' : 'Registrieren'}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Bereits registriert?{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Jetzt anmelden
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
