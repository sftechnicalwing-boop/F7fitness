import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, ArrowRight, User, Mail, Lock } from 'lucide-react';
import { Logo } from '../components/Logo';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder: replace with real auth logic
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-black flex flex-col lg:flex-row overflow-hidden">

      {/* ── Left Panel: Brand Visual ── */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col items-start justify-end p-16 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/auth.MOV" type="video/mp4" />
        </video>

        {/* Bottom-heavy dark fade — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/55 to-brand-black/10" />
        {/* Full right-edge fade — starts at 80% so video fills the full left half */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 80%, #000000 100%)' }} />
        {/* Subtle base darkening */}
        <div className="absolute inset-0 bg-brand-black/15" />

        {/* Content */}
        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-2 mb-10">
            <span className="h-[2px] w-8 bg-brand-yellow" />
            <span className="font-sans font-black text-xs tracking-[0.3em] text-brand-yellow uppercase">
              F7 FITNESS
            </span>
          </div>

          <h2 className="font-display font-black text-4xl xl:text-5xl text-white uppercase leading-[0.95] tracking-tight mb-6">
            START YOUR<br />
            <span className="text-brand-yellow">TRANSFORMATION.</span>
          </h2>

          <p className="font-sans text-brand-neutral/70 text-sm leading-relaxed mb-10">
            Join F7 Fitness and train under elite coaches committed to building your strongest, most athletic self.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 pt-6 border-t border-white/10">
            {[
              { value: '500+', label: 'Members' },
              { value: '10+', label: 'Coaches' },
              { value: '12+', label: 'Years' },
            ].map((s) => (
              <div key={s.label} className="text-left">
                <p className="font-display font-black text-2xl text-brand-yellow leading-none">{s.value}</p>
                <p className="font-sans text-[10px] text-brand-neutral/50 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ── Right Panel: Form ── */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12 bg-brand-black">

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 font-sans font-bold text-[11px] uppercase tracking-widest text-brand-neutral/50 hover:text-brand-yellow transition-colors mb-12 self-start group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Site
        </button>

        {/* Logo (mobile) */}
        <div className="mb-8 lg:hidden">
          <Logo variant="horizontal" height={36} />
        </div>

        {/* Heading */}
        <div className="mb-10">
          <p className="font-sans font-bold text-[11px] tracking-[0.25em] text-brand-yellow uppercase mb-3">
            {mode === 'signup' ? 'CREATE ACCOUNT' : 'WELCOME BACK'}
          </p>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-[0.95]">
            {mode === 'signup' ? (
              <>JOIN F7<br /><span className="text-brand-yellow">FITNESS.</span></>
            ) : (
              <>SIGN<br /><span className="text-brand-yellow">IN.</span></>
            )}
          </h1>
        </div>

        {/* Toggle Tabs */}
        <div className="flex mb-10 border border-brand-gray-light">
          {(['signup', 'signin'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setMode(tab)}
              className={`flex-1 py-3 font-sans font-bold text-[11px] uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                mode === tab
                  ? 'bg-brand-yellow text-brand-black'
                  : 'bg-transparent text-brand-neutral/50 hover:text-white'
              }`}
            >
              {tab === 'signup' ? 'Sign Up' : 'Sign In'}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name — only for sign up */}
          {mode === 'signup' && (
            <div className="relative">
              <label className="block font-sans font-bold text-[10px] uppercase tracking-widest text-brand-neutral/50 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-neutral/40" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full bg-brand-gray border border-brand-gray-light focus:border-brand-yellow text-white font-sans text-sm pl-11 pr-4 py-3.5 outline-none transition-colors placeholder:text-brand-neutral/30"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block font-sans font-bold text-[10px] uppercase tracking-widest text-brand-neutral/50 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-neutral/40" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-brand-gray border border-brand-gray-light focus:border-brand-yellow text-white font-sans text-sm pl-11 pr-4 py-3.5 outline-none transition-colors placeholder:text-brand-neutral/30"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block font-sans font-bold text-[10px] uppercase tracking-widest text-brand-neutral/50 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-neutral/40" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full bg-brand-gray border border-brand-gray-light focus:border-brand-yellow text-white font-sans text-sm pl-11 pr-12 py-3.5 outline-none transition-colors placeholder:text-brand-neutral/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-neutral/40 hover:text-brand-yellow transition-colors cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {/* Forgot password link — sign in only */}
          {mode === 'signin' && (
            <div className="text-right">
              <button
                type="button"
                className="font-sans text-[11px] text-brand-neutral/50 hover:text-brand-yellow transition-colors uppercase tracking-widest cursor-pointer"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full flex items-center justify-center bg-brand-yellow text-brand-black font-sans font-black text-xs uppercase tracking-widest px-8 py-4 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-brand-black/40 border-t-brand-black rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'signup' ? 'CREATE MY ACCOUNT' : 'SIGN IN'}</span>
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Bottom toggle link */}
        <p className="font-sans text-[11px] text-brand-neutral/40 uppercase tracking-wider mt-8 text-center">
          {mode === 'signup' ? 'Already a member?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
            className="text-brand-yellow hover:underline font-bold cursor-pointer"
          >
            {mode === 'signup' ? 'Sign In' : 'Sign Up'}
          </button>
        </p>

        {/* Legal note */}
        <p className="font-sans text-[9px] text-brand-neutral/25 uppercase tracking-wider mt-6 text-center leading-relaxed">
          By creating an account you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};
