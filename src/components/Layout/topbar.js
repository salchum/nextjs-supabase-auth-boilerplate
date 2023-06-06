'use client';

import { useEffect } from 'react';

import { useAuth } from 'src/components/AuthProvider';
import SignOut from 'src/components/SignOut';

export default function Topbar() {
  const brandName = 'Dikerjain';
  const { user } = useAuth();

  useEffect(() => {
    import('preline');
  }, []);

  const headerClassName = user
    ? 'sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap border-b bg-white py-2.5 text-sm dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:justify-start sm:py-4 lg:pl-64'
    : 'sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap border-b bg-white py-2.5 text-sm dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:justify-start sm:py-4';

  return (
    <>
      {/* <!-- ========== HEADER ========== --> */}
      <header className={headerClassName}>
        <nav
          className="mx-auto flex w-full basis-full items-center px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="mr-5 lg:mr-0">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              {brandName}
            </a>
          </div>

          <div className="ml-auto flex w-full items-center justify-end sm:order-3 sm:justify-end sm:gap-x-3">
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex h-[2.375rem] w-[2.375rem] shrink-0 items-center justify-center gap-2 rounded-full bg-white align-middle text-xs font-medium text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-offcanvas="#hs-offcanvas-right"
              >
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </button>
              {user && (
                <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                  <button
                    id="hs-dropdown-with-header"
                    type="button"
                    className="hs-dropdown-toggle inline-flex h-[2.375rem] w-[2.375rem] shrink-0 items-center justify-center gap-2 rounded-full bg-white align-middle text-xs font-medium text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  >
                    <img
                      className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Description"
                    />
                  </button>

                  <div
                    className="hs-dropdown-menu duration hidden min-w-[15rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800"
                    aria-labelledby="hs-dropdown-with-header"
                  >
                    <div className="-m-2 rounded-t-lg bg-gray-100 px-5 py-3 dark:bg-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Signed in as
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                        {user.name ?? user.email}
                      </p>
                    </div>
                    <div className="mt-2 py-2 first:pt-0 last:pb-0">
                      <SignOut />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </>
  );
}
