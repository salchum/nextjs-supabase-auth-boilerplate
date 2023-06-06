'use client';

import { useAuth } from 'src/components/AuthProvider';
import Toggle from 'src/components/Layout/toggle';

export default function Sidebar() {
  const brandName = 'Dikerjain';
  const { user } = useAuth();
  return (
    user && (
      <div>
        <Toggle />
        <div
          id="application-sidebar"
          className="hs-overlay scrollbar-y dark:scrollbar-y fixed inset-y-0 left-0 z-[60] hidden w-64 -translate-x-full overflow-y-auto border-r border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
        >
          <div className="px-6">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="/asd"
              aria-label="Brand"
            >
              {brandName}
            </a>
          </div>

          <nav
            className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li>
                <a
                  className="flex items-center gap-x-3.5 rounded-md bg-gray-100 px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:text-slate-700"
                  href="/asd"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300"
                  href="/asd"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                  Documentation
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  );
}
