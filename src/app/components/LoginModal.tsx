'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToSignup,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      setEmail('');
      setPassword('');
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl border border-slate-700/50 p-8"
        style={{
          background: 'rgba(15, 11, 12, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text" style={{
            backgroundImage: 'linear-gradient(to bottom, #F5F0EB 0%, #B78460 100%)',
          }}>
            Welcome Back
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`rounded-lg p-4 ${
                error.toLowerCase().includes('email not verified')
                  ? 'bg-amber-500/10 border border-amber-500/20'
                  : 'bg-red-500/10 border border-red-500/20'
              }`}
            >
              <p className={`text-sm ${
                error.toLowerCase().includes('email not verified')
                  ? 'text-amber-400'
                  : 'text-red-400'
              }`}>
                {error}
              </p>
              {error.toLowerCase().includes('email not verified') && (
                <p className="text-xs text-amber-300/80 mt-2">
                  Please check your email for the verification link. If you didn&apos;t receive it, try signing up again.
                </p>
              )}
            </motion.div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#B78460]/50 focus:border-[#B78460]/50 transition"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#B78460]/50 focus:border-[#B78460]/50 transition"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-50"
            style={{
              background: loading 
                ? 'rgba(183, 132, 96, 0.6)'
                : 'linear-gradient(135deg, #B78460 0%, #8A5A3C 100%)',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(183, 132, 96, 0.2)' }} />
            <span className="text-sm text-slate-500">or</span>
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(183, 132, 96, 0.2)' }} />
          </div>

          {/* Switch to Signup */}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200"
            style={{
              border: '1px solid rgba(183, 132, 96, 0.3)',
              color: '#B78460',
            }}
          >
            Create New Account
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};
