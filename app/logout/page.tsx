"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    async function run() {
      try { await fetch('/api/auth/logout', { method: 'POST' }); } catch {}
      router.replace('/');
    }
    run();
  }, [router]);
  return <main className="max-w-md mx-auto mt-16 text-center">Déconnexion...</main>;
}
