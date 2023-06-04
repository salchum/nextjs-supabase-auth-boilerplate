'use client';

import { useAuth } from 'src/components/AuthProvider';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import supabase from 'src/lib/supabase-browser';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const { initial, user } = useAuth();
  const router = useRouter();
  const [listEselon2, setListEselon2] = useState([]);
  const [listEselon3, setListEselon3] = useState([]);
  const [listJabatan, setListJabatan] = useState([]);
  const [unit, setUnit] = useState('Pilih Unit');
  const [subdit, setSubdit] = useState('Pilih Subdit');
  const [jabatan, setJabatan] = useState('Pilih Jabatan');

  useEffect(() => {
    if (!initial && !user) {
      router.push('/');
      return;
    }
  }, [initial, user]);

  async function fetchListEselon2() {
    const { data, error } = await supabase.from('m_unit_es2').select('*');
    if (error) {
      console.log('error', error);
      return;
    }
    console.log('data', data);
    setListEselon2(data);
  }

  useEffect(() => {
    fetchListEselon2();
  }, []);
  useEffect(() => {
    fetchListJabatan();
  }, []);

  async function fetchListEselon3() {
    const { data, error } = await supabase
      .from('m_unit_es3')
      .select('*')
      .eq('id_unit_es2', unit);
    setListEselon3(data);
    console.log('data', data);
    console.log('error', error);
  }

  async function fetchListJabatan() {
    const { data, error } = await supabase.from('m_jabatan').select('*');
    if (error) {
      console.log('error', error);
    }
    setListJabatan(data);
    console.log('data', data);
  }

  useEffect(() => {
    if (unit === 'Pilih Unit') {
      return;
    }
    fetchListEselon3();
  }, [unit]);

  return (
    <>
      {/* <!-- Card Section --> */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* <!-- Card --> */}
        <div className="rounded-xl bg-white p-4 shadow dark:bg-slate-900 sm:p-7">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              This is your First Landing!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please fill below form.
            </p>
          </div>

          <form>
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-12 gap-4 sm:gap-6">
              <div className="col-span-3">
                <label className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200">
                  Profile photo
                </label>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-9">
                <div className="flex items-center gap-5">
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="/image/img.jpg"
                    alt="Description"
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <button
                        type="button"
                        onClick={() => alert('sek durung isok cok')}
                        className="inline-flex items-center justify-center gap-2 rounded-md border bg-white px-3 py-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <svg
                          className="h-3 w-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                        Upload photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-3">
                <label
                  htmlFor="af-account-full-name"
                  className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
                >
                  Full name
                </label>
                <div className="hs-tooltip inline-block">
                  <button type="button" className="hs-tooltip-toggle ml-1">
                    <svg
                      className="inline-block h-3 w-3 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </button>
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block w-40 rounded-md bg-gray-900 px-2 py-1 text-center text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                    role="tooltip"
                  >
                    Displayed on public forums, such as Preline
                  </span>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-9">
                <div className="sm:flex">
                  <input
                    id="af-account-full-name"
                    type="text"
                    className="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                    placeholder="Maria Boone"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="af-account-phone"
                    className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
                  >
                    Unit
                  </label>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-9">
                <div className="sm:flex">
                  <select
                    className="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-9 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:w-auto sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                    value={unit}
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  >
                    <option disabled>Pilih Unit</option>
                    {listEselon2.map((eselon) => {
                      return (
                        <option key={eselon.id} value={eselon.id}>
                          {eselon.nama_unit}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="af-account-phone"
                    className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
                  >
                    Subdit
                  </label>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-9">
                <div className="sm:flex">
                  <select
                    className="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-9 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:w-auto sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                    value={subdit}
                    onChange={(e) => {
                      setSubdit(e.target.value);
                    }}
                  >
                    <option disabled>Pilih Subdit</option>
                    {listEselon3.map((eselon) => {
                      return (
                        <option key={eselon.id} value={eselon.id}>
                          {eselon.nama_unit}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="af-account-phone"
                    className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
                  >
                    Jabatan
                  </label>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-9">
                <div className="sm:flex">
                  <select
                    className="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-9 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:w-auto sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                    value={jabatan}
                    onChange={(e) => {
                      setJabatan(e.target.value);
                    }}
                  >
                    <option disabled>Pilih Jabatan</option>
                    {listJabatan.map((jabatan) => {
                      return (
                        <option key={jabatan.id} value={jabatan.id}>
                          {jabatan.jabatan}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border bg-white px-3 py-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => aler('belum bisa save juga wkwk')}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Card Section --> */}
      {/* </div> */}
      {user && (
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      )}
    </>
  );
}
