import { useState, useEffect } from 'react';
import SwirlBackground from '@/components/SwirlBackground';
import HeaderSwirlBackground from '@/components/HeaderSwirlBackground';
import { PolarisPerks } from '@/features/auth/components/PolarisPerks';
import { LoginFormContent } from '@/features/auth/components/LoginFormContent';
import { SignupFormContent } from '@/features/auth/components/SignupFormContent';

type AuthMode = 'login' | 'signup';

export function AuthPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [mode, setMode] = useState<AuthMode>('login');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const onChange = (): void => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const handleModeSwitch = (newMode: AuthMode) => {
    if (newMode === mode) return;
    setIsAnimating(true);
    setTimeout(() => {
      setMode(newMode);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const isSignup = mode === 'signup';

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-[#020C1B] px-2 py-8 md:px-6 lg:px-8 lg:py-12">
      <SwirlBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Master container wrapping both sections */}
        <div
          className={isMobile ? '' : 'glass-card overflow-hidden border border-white/10 p-5 md:p-8'}
        >
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Info card (left/top) */}
            <section className="flex h-full w-full justify-center lg:justify-start">
              <div className="flex h-full w-full max-w-xl flex-col p-2 text-left sm:p-3 md:p-4 lg:max-w-none">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2">
                    <div className="relative">
                      <img
                        src="/images/logos/logo.png"
                        alt="Smartslate"
                        className="h-8 w-auto select-none transition-all duration-300 md:h-9 lg:h-10"
                        style={{
                          transform: isSignup ? 'scale(1.1)' : 'scale(1)',
                        }}
                      />
                      <span className="font-heading absolute -top-1 -right-8 text-xs font-medium text-white md:-right-10 md:text-sm">
                        Polaris
                      </span>
                    </div>
                  </div>
                  <div className="relative mt-3 max-w-2xl overflow-hidden">
                    <p
                      className={`text-white/70 transition-all duration-300 ${
                        isSignup ? 'text-base' : 'text-sm md:text-base'
                      } ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
                    >
                      {isSignup
                        ? 'Turn customer insight into a clear, prioritized roadmap. Align faster. Build smarter.'
                        : 'Welcome back to Polaris Starmaps. Access your insights and continue building smarter.'}
                    </p>
                  </div>
                </div>

                {/* Public report mockup with dynamic sizing */}
                <div
                  className={`hidden flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 sm:block ${
                    isSignup
                      ? 'mt-6 min-h-[460px] md:min-h-[520px] lg:min-h-[600px]'
                      : 'mt-4 min-h-[320px] md:min-h-[380px] lg:min-h-[420px]'
                  }`}
                >
                  {/* Mock header */}
                  <div
                    className={`relative overflow-hidden border-b border-white/10 bg-[rgb(2,12,27)]/60 backdrop-blur-xl transition-all duration-500 ${
                      isSignup ? 'min-h-[34px] md:min-h-[40px]' : 'min-h-[30px] md:min-h-[36px]'
                    }`}
                  >
                    <HeaderSwirlBackground />
                    <div
                      className={`relative z-10 flex items-center justify-between transition-all duration-500 ${
                        isSignup
                          ? 'px-[0.5rem] py-[0.4rem] md:px-[0.6rem] md:py-[0.5rem]'
                          : 'px-[0.4rem] py-[0.3rem] md:px-[0.5rem] md:py-[0.4rem]'
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <img
                          src="/images/logos/logo.png"
                          alt="SmartSlate"
                          className={`w-auto transition-all duration-500 ${
                            isSignup ? 'h-4 md:h-5 lg:h-6' : 'h-3 md:h-4 lg:h-5'
                          }`}
                        />
                        <span
                          className={`font-['Lato'] font-medium text-white transition-all duration-500 ${
                            isSignup ? 'mt-1 text-xs md:text-sm' : 'mt-0.5 text-[10px] md:text-[11px]'
                          }`}
                        >
                          Polaris Starmaps
                        </span>
                      </div>
                      <div
                        className={`hidden items-center md:flex transition-all duration-500 ${
                          isSignup ? 'gap-3' : 'gap-2'
                        }`}
                      >
                        <span
                          className={`bg-[rgb(var(--primary))] rounded-full border border-white/10 transition-all duration-500 ${
                            isSignup ? 'h-[14px] w-[14px]' : 'h-[10px] w-[10px]'
                          }`}
                        />
                        <span
                          className={`bg-[rgb(var(--primary)/0.3)] rounded-full border border-white/10 transition-all duration-500 ${
                            isSignup ? 'h-[14px] w-[14px]' : 'h-[10px] w-[10px]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mock blueprint sections */}
                  <div
                    className={`block h-full transition-all duration-500 ${
                      isSignup ? 'p-4 md:p-6' : 'p-2 md:p-3'
                    }`}
                  >
                    <div
                      className={`h-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 ${
                        isSignup ? 'rounded-2xl' : 'rounded-xl'
                      }`}
                    >
                      <div
                        className={`flex h-full flex-col transition-all duration-500 ${
                          isSignup ? 'p-4 md:p-6' : 'p-2 md:p-3'
                        }`}
                      >
                        {/* Executive Summary Section */}
                        <div
                          className={`rounded-lg border border-white/10 bg-white/5 transition-all duration-500 ${
                            isSignup ? 'mb-6 rounded-xl p-4' : 'mb-3 p-2 md:p-3'
                          }`}
                        >
                          <div
                            className={`rounded-full bg-white/30 transition-all duration-500 ${
                              isSignup ? 'mb-3 h-4 w-32' : 'mb-2 h-3 w-24'
                            }`}
                          />
                          <div className={isSignup ? 'space-y-2' : 'space-y-1'}>
                            <div
                              className={`w-full rounded-full bg-white/15 transition-all duration-500 ${
                                isSignup ? 'h-2' : 'h-1.5'
                              }`}
                            />
                            <div
                              className={`w-4/5 rounded-full bg-white/10 transition-all duration-500 ${
                                isSignup ? 'h-2' : 'h-1.5'
                              }`}
                            />
                            <div
                              className={`w-3/4 rounded-full bg-white/10 transition-all duration-500 ${
                                isSignup ? 'h-2' : 'h-1.5'
                              }`}
                            />
                          </div>
                        </div>

                        {/* Learning Objectives Section */}
                        <div
                          className={`rounded-lg border border-white/10 bg-white/5 transition-all duration-500 ${
                            isSignup ? 'mb-6 rounded-xl p-4' : 'mb-3 p-2 md:p-3'
                          }`}
                        >
                          <div
                            className={`rounded-full bg-white/30 transition-all duration-500 ${
                              isSignup ? 'mb-3 h-4 w-40' : 'mb-2 h-3 w-32'
                            }`}
                          />
                          <div
                            className={`grid grid-cols-2 transition-all duration-500 ${
                              isSignup ? 'gap-3' : 'gap-2'
                            }`}
                          >
                            <div className={isSignup ? 'space-y-2' : 'space-y-1'}>
                              <div
                                className={`w-3/4 rounded-full bg-white/15 transition-all duration-500 ${
                                  isSignup ? 'h-2' : 'h-1.5'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-8 rounded-lg' : 'h-6'
                                }`}
                              />
                            </div>
                            <div className={isSignup ? 'space-y-2' : 'space-y-1'}>
                              <div
                                className={`w-2/3 rounded-full bg-white/15 transition-all duration-500 ${
                                  isSignup ? 'h-2' : 'h-1.5'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-8 rounded-lg' : 'h-6'
                                }`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Target Audience Section */}
                        <div
                          className={`rounded-lg border border-white/10 bg-white/5 transition-all duration-500 ${
                            isSignup ? 'mb-6 rounded-xl p-4' : 'mb-3 p-2 md:p-3'
                          }`}
                        >
                          <div
                            className={`rounded-full bg-white/30 transition-all duration-500 ${
                              isSignup ? 'mb-3 h-4 w-36' : 'mb-2 h-3 w-28'
                            }`}
                          />
                          <div
                            className={`grid grid-cols-3 transition-all duration-500 ${
                              isSignup ? 'gap-2' : 'gap-1'
                            }`}
                          >
                            <div
                              className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                isSignup ? 'h-12 rounded-lg' : 'h-8'
                              }`}
                            />
                            <div
                              className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                isSignup ? 'h-12 rounded-lg' : 'h-8'
                              }`}
                            />
                            <div
                              className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                isSignup ? 'h-12 rounded-lg' : 'h-8'
                              }`}
                            />
                          </div>
                        </div>

                        {/* Content Outline Section */}
                        <div
                          className={`rounded-lg border border-white/10 bg-white/5 transition-all duration-500 ${
                            isSignup ? 'mb-6 rounded-xl p-4' : 'mb-3 p-2 md:p-3'
                          }`}
                        >
                          <div
                            className={`rounded-full bg-white/30 transition-all duration-500 ${
                              isSignup ? 'mb-3 h-4 w-32' : 'mb-2 h-3 w-24'
                            }`}
                          />
                          <div className={isSignup ? 'space-y-3' : 'space-y-2'}>
                            <div
                              className={`flex items-center transition-all duration-500 ${
                                isSignup ? 'gap-3' : 'gap-2'
                              }`}
                            >
                              <div
                                className={`bg-[rgb(var(--primary))] rounded-full transition-all duration-500 ${
                                  isSignup ? 'h-3 w-3' : 'h-2 w-2'
                                }`}
                              />
                              <div
                                className={`flex-1 rounded-full bg-white/15 transition-all duration-500 ${
                                  isSignup ? 'h-2' : 'h-1.5'
                                }`}
                              />
                            </div>
                            <div
                              className={`flex items-center transition-all duration-500 ${
                                isSignup ? 'gap-3' : 'gap-2'
                              }`}
                            >
                              <div
                                className={`rounded-full bg-white/20 transition-all duration-500 ${
                                  isSignup ? 'h-3 w-3' : 'h-2 w-2'
                                }`}
                              />
                              <div
                                className={`flex-1 rounded-full bg-white/10 transition-all duration-500 ${
                                  isSignup ? 'h-2' : 'h-1.5'
                                }`}
                              />
                            </div>
                            <div
                              className={`flex items-center transition-all duration-500 ${
                                isSignup ? 'gap-3' : 'gap-2'
                              }`}
                            >
                              <div
                                className={`rounded-full bg-white/20 transition-all duration-500 ${
                                  isSignup ? 'h-3 w-3' : 'h-2 w-2'
                                }`}
                              />
                              <div
                                className={`flex-1 rounded-full bg-white/10 transition-all duration-500 ${
                                  isSignup ? 'h-2' : 'h-1.5'
                                }`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Assessment Strategy Section */}
                        <div
                          className={`rounded-lg border border-white/10 bg-white/5 transition-all duration-500 ${
                            isSignup ? 'mb-6 rounded-xl p-4' : 'mb-3 p-2 md:p-3'
                          }`}
                        >
                          <div
                            className={`rounded-full bg-white/30 transition-all duration-500 ${
                              isSignup ? 'mb-3 h-4 w-40' : 'mb-2 h-3 w-32'
                            }`}
                          />
                          <div
                            className={`grid grid-cols-2 transition-all duration-500 ${
                              isSignup ? 'gap-3' : 'gap-2'
                            }`}
                          >
                            <div className={isSignup ? 'space-y-2' : 'space-y-1'}>
                              <div
                                className={`w-3/4 rounded-full bg-white/15 transition-all duration-500 ${
                                  isSignup ? 'h-2' : 'h-1.5'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-8 rounded-lg' : 'h-6'
                                }`}
                              />
                            </div>
                            <div className={isSignup ? 'space-y-2' : 'space-y-1'}>
                              <div
                                className={`w-2/3 rounded-full bg-white/15 transition-all duration-500 ${
                                  isSignup ? 'h-2' : 'h-1.5'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-8 rounded-lg' : 'h-6'
                                }`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Resources Section */}
                        <div
                          className={`rounded-lg border border-white/10 bg-white/5 transition-all duration-500 ${
                            isSignup ? 'rounded-xl p-4' : 'p-2 md:p-3'
                          }`}
                        >
                          <div
                            className={`rounded-full bg-white/30 transition-all duration-500 ${
                              isSignup ? 'mb-3 h-4 w-24' : 'mb-2 h-3 w-20'
                            }`}
                          />
                          <div className={isSignup ? 'space-y-2' : 'space-y-1'}>
                            <div
                              className={`grid grid-cols-3 transition-all duration-500 ${
                                isSignup ? 'gap-2' : 'gap-1'
                              }`}
                            >
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-6' : 'h-4'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-6' : 'h-4'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-6' : 'h-4'
                                }`}
                              />
                            </div>
                            <div
                              className={`grid grid-cols-3 transition-all duration-500 ${
                                isSignup ? 'gap-2' : 'gap-1'
                              }`}
                            >
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-6' : 'h-4'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-6' : 'h-4'
                                }`}
                              />
                              <div
                                className={`rounded border border-white/10 bg-white/5 transition-all duration-500 ${
                                  isSignup ? 'h-6' : 'h-4'
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Auth form section (right/bottom) */}
            <section className="flex h-full w-full items-stretch justify-center pt-0 pb-6 sm:pt-1 md:pt-2">
              <div className="relative h-full w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(167,218,219,0.18),0_12px_60px_rgba(167,218,219,0.28),0_8px_24px_rgba(167,218,219,0.18)] backdrop-blur-xl lg:max-w-none">
                {/* Glow effect */}
                <div
                  className="pointer-events-none absolute -inset-6 rounded-3xl opacity-75 blur-2xl"
                  aria-hidden="true"
                  style={{
                    background: 'rgba(167,218,219,0.15)',
                  }}
                />
                <div className="relative flex h-full flex-col space-y-3 px-4 py-3 sm:space-y-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-7">
                  <div className="relative z-10 mx-auto h-full w-full max-w-sm md:max-w-sm lg:max-w-md">
                    <div className="flex h-full flex-col rounded-2xl px-0 pt-0.5 pb-2 sm:pt-1 sm:pb-3 md:pt-2 md:pb-4 lg:pb-4">
                      <div
                        className="bg-[rgb(var(--primary)/0.1)] pointer-events-none absolute -inset-0.5 rounded-2xl opacity-70 blur-xl"
                        aria-hidden="true"
                      />
                      <div className="relative flex flex-1 flex-col">
                        <div className="mb-3 select-none sm:mb-4">
                          <img
                            src="/images/logos/logo.png"
                            alt="Smartslate"
                            className="logo-glow h-7 w-auto sm:h-8 md:hidden"
                          />
                          <div className="relative overflow-hidden">
                            <h2
                              className={`font-heading mt-1.5 text-base font-semibold text-white transition-all duration-300 sm:mt-2 sm:text-lg ${
                                isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                              }`}
                            >
                              {isSignup ? 'Create your account' : 'Sign in to Smartslate'}
                            </h2>
                          </div>
                          <div className="relative overflow-hidden">
                            <p
                              className={`mt-1 text-xs text-white/60 transition-all duration-300 sm:text-sm ${
                                isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                              }`}
                            >
                              {isSignup
                                ? 'Get started with Polaris Starmaps.'
                                : 'Access Polaris Starmaps and your reports.'}
                            </p>
                          </div>
                        </div>

                        {/* Animated form content */}
                        <div className="relative min-h-[400px]">
                          <div
                            className={`absolute inset-0 transition-all duration-300 ${
                              isAnimating
                                ? 'opacity-0 translate-x-4'
                                : 'opacity-100 translate-x-0'
                            }`}
                          >
                            {isSignup ? <SignupFormContent /> : <LoginFormContent />}
                          </div>
                        </div>

                        <div className="flex-1 lg:hidden" />

                        <div className="relative overflow-hidden">
                          <p
                            className={`mt-4 text-left text-[11px] text-white/60 transition-all duration-300 sm:mt-5 sm:text-xs ${
                              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                            }`}
                          >
                            {isSignup ? "Already have an account? " : "Don't have an account? "}
                            <button
                              type="button"
                              onClick={() => handleModeSwitch(isSignup ? 'login' : 'signup')}
                              className="text-[rgb(var(--secondary))] hover:text-[rgb(var(--secondary)/0.8)] underline underline-offset-4"
                            >
                              {isSignup ? 'Sign In' : 'Sign Up'}
                            </button>
                          </p>
                        </div>
                        <p className="mt-2 text-left text-[10px] text-white/50 sm:mt-3 sm:text-[11px]">
                          By continuing, you agree to our{' '}
                          <a
                            href="/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(var(--primary))] hover:text-[rgb(var(--primary)/0.8)] underline underline-offset-4"
                          >
                            Terms
                          </a>{' '}
                          and{' '}
                          <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(var(--primary))] hover:text-[rgb(var(--primary)/0.8)] underline underline-offset-4"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  <PolarisPerks />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
