'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { login } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Small delay for better UX
    setTimeout(() => {
      const success = login(username, password);
      if (success) {
        router.push('/');
        router.refresh();
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 300);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-slate-100 flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(174,221,51,0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(30,143,64,0.2), transparent 35%)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#050912]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/Logows.png"
                alt="Xsphere Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain mx-auto"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white mb-2">Staff Login</h1>
            <p className="text-sm text-slate-400">Access the full website preview</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-transparent transition-all"
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-transparent transition-all"
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:shadow-[#AEDD33]/25"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-[#AEDD33] transition-colors"
            >
              ← Back to landing page
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

