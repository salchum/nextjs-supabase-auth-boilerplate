'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

import { useAuth } from 'src/components/AuthProvider';
import supabase from 'src/lib/supabase-browser';

export default function Profile() {
  const { initial, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initial && !user) {
      router.push('/');
    }
  }, [initial, user]);

  function fillJabatan() {
    const jabatans = [
      'Kepala Bagian Umum',
      'Kepala Sub Bagian Rumah Tangga dan BMN',
      'Kepala Sub Bagian Kepegawaian',
      'Kepala Sub Bagian Tata Usaha Pimpinan',
      'Kepala Bagian Keuangan',
      'Kepala Sub Bagian Pelaksanaan Anggaran',
      'Kepala Sub Bagian Perbendaharaan',
      'Kepala Sub Bagian Verfikasi dan Akuntansi',
      'Kepala Bagian Perencanaan',
      'Kepala Bagian Perundang-undangan',
      'Kasubbag Tata Usaha Dit 1',
      'Kasubdit Fasilitasi Penataan Wilayah Desa',
      'Kasubdit Fasilitasi Penataan Kewenangan dan Produk Hukum Desa',
      'Kasubdit Fasilitasi Administrasi Pemerintahan Desa',
      'Kasubbag Tata Usaha Dit 2',
      'Kasubdit Fasilitasi Pengelolaan Perencanaan Pembangunan Desa',
      'Kasubdit Fasilitasi Pengelolaan Keuangan Desa',
      'Kasubdit Fasilitasi Pengelolaan Aset Desa',
      'Kasubbag Tata Usaha Dit 3',
      'Kasubdit Fasilitasi Kerja Sama Desa',
      'Kasubdit Fasilitasi Lembaga Pemerintahan Desa dan Badan Permusyawaratan Desa',
      'Kasubbag Tata Usaha Dit 4',
      'Kasubdit Fasilitasi Lembaga Kemasyarakatan dan Adat Desa',
      'Kasubdit Fasilitasi Lembaga Pemberdayaan Kesejahteraan Keluarga',
      'Kasubdit Fasilitasi Lembaga Pos Layanan Terpadu',
      'Kasubbag Tata Usaha Dit 5',
      'Kasubdit Pengembangan Kapasitas Pemerintahan Desa',
      'Kasubdit Fasilitasi Pengelolaan Data dan Informasi Desa',
      'Kasubdit Evaluasi Perkembangan Desa',
      'SYSTEM ADMINISTRATOR',
      '-',
      'Tenaga Administrasi',
      'Petugas Keamanan',
      'Pengemudi',
      'Pramubakti',
      'Staf Unit Layanan Administrasi',
      'Staf Administrasi Keprotokoleran',
      'Office Boy / Office Girl',
      'Tukang Kebun',
    ];
    jabatans.map(async (jabatan) => {
      const { data, error } = await supabase
        .from('m_jabatan')
        .insert([{ jabatan, is_honorer: false }]);
      console.log('data: ', data);
      console.log('error: ', error);
    });
  }

  function fillStatus() {
    const statuses = ['Belum Disetujui', 'Telah Disetujui', 'Ditolak'];
    statuses.map(async (status) => {
      const { data, error } = await supabase.from('m_status').insert([{ status }]);
      console.log('data: ', data);
      console.log('error: ', error);
    });
  }

  function fillRoles() {
    const roles = ['System Administrator', 'Approver', 'Employee'];
    roles.map(async (roleName) => {
      const { data, error } = await supabase.from('m_roles').insert([{ roleName }]);
      console.log('data: ', data);
      console.log('error: ', error);
    });
  }

  return (
    <>
      <button type="button" onClick={fillJabatan}>
        fill jabatan
      </button>
      <br />
      <button type="button" onClick={fillStatus}>
        fill status
      </button>
      <br />
      <button type="button" onClick={fillRoles}>
        fill roles
      </button>
      <br />
    </>
  );
}
