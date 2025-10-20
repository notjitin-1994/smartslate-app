import { useState } from 'react';
import type { IdentifierValue } from '@/features/auth/types';
import { AuthInput } from '@/features/auth/components/AuthInput';
import { PasswordInput } from '@/components/PasswordInput';
import { GoogleOAuthButton } from '@/features/auth/components/GoogleOAuthButton';
import * as authService from '@/features/auth/services/authService';

export function LoginFormContent() {
  const [identifierRaw, setIdentifierRaw] = useState('');
  const [identifier, setIdentifier] = useState<IdentifierValue>({ kind: 'unknown', raw: '' });
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (identifier.kind !== 'email') {
      setError('Please enter a valid email address');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await authService.login({ identifier, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <AuthInput
        value={identifierRaw}
        onChange={(raw, parsed) => {
          setIdentifierRaw(raw);
          setIdentifier(parsed);
        }}
      />
      <PasswordInput
        label="Password"
        value={password}
        onChange={setPassword}
        placeholder="••••••••"
        autoComplete="current-password"
        name="current-password"
      />

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="btn-primary pressable w-full rounded-xl px-4 py-3"
        disabled={loading}
      >
        <span className={loading ? 'animate-pulse opacity-70' : ''}>
          {loading ? 'Signing in…' : 'Login'}
        </span>
      </button>

      <div className="relative py-2 text-center text-xs text-white/40">
        <span className="text-[rgb(var(--primary))] relative z-10 rounded-sm bg-white/5 px-2">or</span>
        <span className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-white/10" />
      </div>

      <GoogleOAuthButton />
    </form>
  );
}
