'use client';

import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { initial, user, view } = useAuth();
  const router = useRouter();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    router.push('/profile');
  }

  return <Auth view={view} />;
}
