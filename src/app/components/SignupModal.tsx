'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const validatePassword = (password: string) => {
  const requirements = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*]/.test(password),
  };

  const allMet = Object.values(requirements).every(Boolean);
  return { requirements, isValid: allMet };
};

export const SignupModal: React.FC<SignupModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signup } = useAuth();

  const passwordValidation = validatePassword(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength
    if (!passwordValidation.isValid) {
      setError('Password does not meet all requirements');
      return;
    }

    setLoading(true);

    try {
      const message = await signup(email, password);
      setSuccess(
        'Account created! Check your email for the verification link. Once verified, you can login.'
      );
      setTimeout(() => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        onClose();
      }, 3000);
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
        className="w-full max-w-md rounded-2xl border border-slate-700/50 p-8 max-h-[90vh] overflow-y-auto"
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
            Join TechExa
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
              className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex gap-2"
            >
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3"
            >
              <p className="text-emerald-400 text-sm">{success}</p>
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

            {/* Password Requirements */}
            {password && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 space-y-2 text-sm"
              >
                <div className={`flex items-center gap-2 ${passwordValidation.requirements.minLength ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                    {passwordValidation.requirements.minLength && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  8+ characters
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.requirements.hasUpperCase ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                    {passwordValidation.requirements.hasUpperCase && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  Uppercase letter
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.requirements.hasLowerCase ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                    {passwordValidation.requirements.hasLowerCase && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  Lowercase letter
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.requirements.hasNumber ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                    {passwordValidation.requirements.hasNumber && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  Number
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.requirements.hasSpecialChar ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                    {passwordValidation.requirements.hasSpecialChar && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  Special character (!@#$%^&*)
                </div>
              </motion.div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#B78460]/50 focus:border-[#B78460]/50 transition"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
              >
                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !passwordValidation.isValid}
            className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-50"
            style={{
              background: loading 
                ? 'rgba(183, 132, 96, 0.6)'
                : 'linear-gradient(135deg, #B78460 0%, #8A5A3C 100%)',
            }}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(183, 132, 96, 0.2)' }} />
            <span className="text-sm text-slate-500">or</span>
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(183, 132, 96, 0.2)' }} />
          </div>

          {/* Switch to Login */}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200"
            style={{
              border: '1px solid rgba(183, 132, 96, 0.3)',
              color: '#B78460',
            }}
          >
            Already Have an Account?
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};
