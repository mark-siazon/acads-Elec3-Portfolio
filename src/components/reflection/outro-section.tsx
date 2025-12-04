import { component$ } from '@builder.io/qwik';

export const OutroSection = component$(() => {
    return (
        <section class="max-w-5xl mx-auto mt-24 mb-20 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-fade-in" aria-label="Industry Readiness">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">Ready for the Industry</h2>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Item 1: Cloud Native */}
                <div class="glass relative p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group">
                    {/* Tooltip */}
                    <div class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800/90 border border-cyan-500/30 rounded-lg text-xs font-medium text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(34,211,238,0.3)] backdrop-blur-md z-20">
                        Industry Ready
                        <div class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-cyan-500/30 rotate-45"></div>
                    </div>

                    {/* Check Badge */}
                    <div class="absolute top-3 right-3 text-cyan-500/30 group-hover:text-cyan-400 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div class="mb-4 inline-block p-3 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-1">Cloud Native</h3>
                    <p class="text-cyan-200/70 text-sm">Scalable Architecture</p>
                </div>

                {/* Item 2: Containerization */}
                <div class="glass relative p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group">
                    {/* Tooltip */}
                    <div class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800/90 border border-blue-500/30 rounded-lg text-xs font-medium text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md z-20">
                        Industry Ready
                        <div class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-blue-500/30 rotate-45"></div>
                    </div>

                    {/* Check Badge */}
                    <div class="absolute top-3 right-3 text-blue-500/30 group-hover:text-blue-400 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div class="mb-4 inline-block p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-1">Containerization</h3>
                    <p class="text-blue-200/70 text-sm">Docker</p>
                </div>

                {/* Item 3: Orchestration */}
                <div class="glass relative p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 group">
                    {/* Tooltip */}
                    <div class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800/90 border border-pink-500/30 rounded-lg text-xs font-medium text-pink-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-md z-20">
                        Industry Ready
                        <div class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-pink-500/30 rotate-45"></div>
                    </div>

                    {/* Check Badge */}
                    <div class="absolute top-3 right-3 text-pink-500/30 group-hover:text-pink-400 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div class="mb-4 inline-block p-3 rounded-xl bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-1">Orchestration</h3>
                    <p class="text-pink-200/70 text-sm">Kubernetes & K8s</p>
                </div>

                {/* Item 4: IaC */}
                <div class="glass relative p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 group">
                    {/* Tooltip */}
                    <div class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800/90 border border-orange-500/30 rounded-lg text-xs font-medium text-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(249,115,22,0.3)] backdrop-blur-md z-20">
                        Industry Ready
                        <div class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-orange-500/30 rotate-45"></div>
                    </div>

                    {/* Check Badge */}
                    <div class="absolute top-3 right-3 text-orange-500/30 group-hover:text-orange-400 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div class="mb-4 inline-block p-3 rounded-xl bg-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-1">IaC</h3>
                    <p class="text-orange-200/70 text-sm">Terraform Automation</p>
                </div>
            </div>
        </section>
    );
});
