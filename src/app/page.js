'use client';

import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    const router = useRouter();
    router.push('/profile');
  }

  return <Auth view={view} />;
}
