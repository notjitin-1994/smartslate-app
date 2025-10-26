import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPage } from '@/features/auth/AuthPage';
import { getSupabase } from '@/services/supabase';
import { paths } from '@/routes/paths';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function AuthLanding() {
  const navigate = useNavigate();
  useDocumentTitle('Login to Smartslate');

  useEffect(() => {
    let isMounted = true;
    getSupabase().auth.getSession().then(({ data: { session } }) => {
      if (isMounted && session) navigate(paths.portal, { replace: true });
    });
    const { data: { subscription } } = getSupabase().auth.onAuthStateChange((_event, session) => {
      if (session) navigate(paths.portal, { replace: true });
    });
    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  return <AuthPage />;
}
