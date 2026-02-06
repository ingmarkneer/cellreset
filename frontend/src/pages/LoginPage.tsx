import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/lib/store';

export default function LoginPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login({ email, password });
      const { access_token, user } = response.data;
      setAuth(user, access_token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login fehlgeschlagen. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <Link to="/" className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-2">cellRESET</h1>
          </Link>
          <CardTitle className="text-2xl text-center">Anmelden</CardTitle>
          <CardDescription className="text-center">
            Melde dich mit deinem Account an
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Anmelden...' : 'Anmelden'}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            <Link to="/forgot-password" className="text-primary hover:underline">
              Passwort vergessen?
            </Link>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            Noch kein Account?{' '}
            <Link to="/register" className="text-primary hover:underline font-medium">
              Jetzt registrieren
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
