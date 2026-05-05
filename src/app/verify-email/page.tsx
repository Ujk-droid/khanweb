'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import api from '@/lib/axios';

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'idle'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      setMessage('Verification token is missing or invalid.');
      return;
    }

    const verifyEmail = async () => {
      setStatus('loading');
      try {
        const response = await api.get(`/auth/verify-email?token=${encodeURIComponent(token)}`);
        if (response.data?.success) {
          setStatus('success');
          setMessage(response.data.message || 'Your email has been verified successfully.');
        } else {
          setStatus('error');
          setMessage(response.data?.message || 'Email verification failed.');
        }
      } catch (error: any) {
        setStatus('error');
        setMessage(error.response?.data?.message || 'Email verification failed.');
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-20 text-center">
      <div className="w-full rounded-[2rem] border border-slate-700/70 bg-slate-950/80 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-300/80">Email Verification</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {status === 'success' ? 'Verified!' : status === 'error' ? 'Verification Failed' : 'Verifying Your Email'}
            </h1>
            <p className="text-slate-400 sm:text-lg">{message || 'Please wait while we verify your account.'}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/"
              className="rounded-3xl border border-slate-700/60 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-amber-400/30 hover:bg-amber-400/10"
            >
              Back to Home
            </Link>
            {status === 'success' ? (
              <Link
                href="/"
                className="rounded-3xl bg-gradient-to-r from-amber-400 to-orange-600 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Go to Login
              </Link>
            ) : status === 'error' ? (
              <Link
                href="/"
                className="rounded-3xl bg-gradient-to-r from-slate-700 via-slate-900 to-slate-800 px-6 py-4 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Sign Up Again
              </Link>
            ) : (
              <div className="rounded-3xl bg-slate-800/50 px-6 py-4 text-sm font-semibold text-slate-400">
                Processing...
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}