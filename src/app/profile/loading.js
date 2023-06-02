'use client';
import { useEffect } from 'react';
export default function Loading() {
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <div className="min-w-screen  flex min-h-screen content-center items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
