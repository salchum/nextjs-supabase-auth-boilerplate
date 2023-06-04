'use client';

import { useAuth } from 'src/components/AuthProvider';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import supabase from 'src/lib/supabase-browser';
import { useRouter } from 'next/navigation';
// import createClient from 'src/lib/supabase-server';

export default function Profile() {
  // const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const { initial, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initial && !user) {
      router.push('/');
    }
  }, [initial, user]);

  useEffect(() => {
    async function fetchFullProfile() {
      const { data } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)
        .maybeSingle();
      if (!data) {
        router.push('/first');
      }
      if (data) {
        console.log('full profile: ', data);
        setProfile(data);
      }
    }

    if (user && !profile) {
      fetchFullProfile();
    }
  }, [user, profile]);

  return (
    <>
      {user && (
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      )}
      {profile && (
        <pre>
          <code>{JSON.stringify(profile, null, 2)}</code>
        </pre>
      )}
    </>
  );
}
