import { AuthProvider } from 'src/components/AuthProvider';
import Sidebar from 'src/components/Layout/sidebar';
import Topbar from 'src/components/Layout/topbar';
import createClient from 'src/lib/supabase-server';

import 'src/styles/globals.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;
  const className = accessToken
    ? 'min-h-full w-full px-4 pt-10 sm:px-6 md:px-8 lg:pl-72'
    : 'min-h-full w-full px-4 pt-10 sm:px-6 md:px-8';

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <AuthProvider accessToken={accessToken}>
          <Topbar />
          {/* <Toggle /> */}
          <Sidebar />
          <div className={className}>
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-400">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
