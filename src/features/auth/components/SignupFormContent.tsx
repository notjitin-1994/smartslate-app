import { useState, useEffect } from 'react';
import type { IdentifierValue } from '@/features/auth/types';
import { AuthInput } from '@/features/auth/components/AuthInput';
import { PasswordInput } from '@/components/PasswordInput';
import { PasswordStrength } from '@/features/auth/components/PasswordStrength';
import { GoogleOAuthButton } from '@/features/auth/components/GoogleOAuthButton';
import * as authService from '@/features/auth/services/authService';

export function SignupFormContent() {
  const [identifierRaw, setIdentifierRaw] = useState('');
  const [identifier, setIdentifier] = useState<IdentifierValue>({ kind: 'unknown', raw: '' });
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  // Handle exit animation timing
  useEffect(() => {
    if (!showPasswordStrength && password) {
      setAnimatingOut(true);
      const timer = setTimeout(() => {
        setAnimatingOut(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showPasswordStrength, password]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (identifier.kind !== 'email') {
      setError('Please enter a valid email address');
      return;
    }

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await authService.signup({ identifier, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign up failed');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <AuthInput
        value={identifierRaw}
        onChange={(raw, parsed) => {
          setIdentifierRaw(raw);
          setIdentifier(parsed);
        }}
      />

      <div className="space-y-4">
        <PasswordInput
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Create a strong password"
          autoComplete="new-password"
          name="new-password"
          onFocus={() => setShowPasswordStrength(true)}
          onBlur={() => setShowPasswordStrength(false)}
        />
        {(showPasswordStrength || animatingOut) && password && (
          <div
            className={`transition-all duration-300 ${
              showPasswordStrength ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <PasswordStrength value={password} />
          </div>
        )}
      </div>

      <PasswordInput
        label="Confirm password"
        value={confirm}
        onChange={setConfirm}
        placeholder="Repeat password"
        autoComplete="new-password"
        name="confirm-password"
      />

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="btn-primary pressable w-full rounded-xl px-4 py-3"
        disabled={loading}
      >
        <span className={loading ? 'animate-pulse opacity-70' : ''}>
          {loading ? 'Creating account…' : 'Create account'}
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
