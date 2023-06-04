'use client';

import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';

export default function SignOut() {
  const { signOut } = useAuth();
  const router = useRouter();
  // const class = { props, ...className } || '';
  // console.log('SignOut', props);

  async function handleSignOut() {
    const { error } = await signOut();

    if (error) {
      console.error('ERROR signing out:', error);
    }
    router.push('/');
  }

  return (
    <button
      type="button"
      className="flex w-full items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      onClick={handleSignOut}
    >
      <svg
        className="flex-none"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
        />
        <path
          fillRule="evenodd"
          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
      </svg>{' '}
      Sign Out
    </button>
  );
}
