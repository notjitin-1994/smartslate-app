import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPage } from '@/features/auth/AuthPage';
import { getSupabase, canInitializeSupabase } from '@/services/supabase';
import { paths } from '@/routes/paths';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function AuthLanding() {
  const navigate = useNavigate();
  const [initError, setInitError] = useState<Error | null>(null);
  useDocumentTitle('Login to Smartslate');

  useEffect(() => {
    // Check if Supabase can be initialized
    if (!canInitializeSupabase()) {
      setInitError(new Error('Application not configured. Please contact support.'));
      return;
    }

    let isMounted = true;
    
    try {
      const supabase = getSupabase();
      
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (isMounted && session) navigate(paths.portal, { replace: true });
      }).catch((error) => {
        if (isMounted) {
          console.error('Failed to get session:', error);
          setInitError(error);
        }
      });
      
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session) navigate(paths.portal, { replace: true });
      });
      
      return () => {
        isMounted = false;
        subscription.unsubscribe();
      };
    } catch (error) {
      if (isMounted) {
        console.error('Failed to initialize Supabase:', error);
        setInitError(error instanceof Error ? error : new Error('Failed to initialize'));
      }
    }
  }, [navigate]);

  // Show error state if initialization failed
  if (initError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#020C1B]">
        <div className="glass-card p-8 max-w-md w-full text-center border border-white/10">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">Configuration Error</h2>
          <p className="text-white/60 mb-6">
            The application is not properly configured. Please contact support for assistance.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[var(--secondary-accent)] text-white rounded-lg hover:bg-[var(--secondary-accent-light)] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <AuthPage />;
}
