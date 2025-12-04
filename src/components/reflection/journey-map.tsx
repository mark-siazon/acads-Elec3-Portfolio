import { component$ } from '@builder.io/qwik';

export const JourneyMap = component$(() => {
    return (
        <div class="max-w-6xl mx-auto relative">
            {/* Central Journey Line */}
            <div class="hidden md:block journey-line"></div>

            {/* 1. Assignment 1: REST API */}
            <div class="relative mb-16 md:mb-24 group">
                <div class="hidden md:block journey-node top-8 !border-cyan-500 shadow-cyan-500/50"></div>
                <div class="md:flex items-center justify-between gap-8">
                    <div class="md:w-1/2 md:text-right order-1 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-left">
                        <div class="inline-block mb-2">
                            <span class="text-cyan-400 font-bold tracking-wider text-sm uppercase">Assignment 1: The Foundation</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">Spring Boot RESTful Web Services</h3>
                        <p class="text-gray-400 leading-relaxed mb-4">
                            Developed a comprehensive <span class="text-white">User Management REST API</span> using <span class="text-white">Spring Boot</span> and <span class="text-white">MySQL</span>.
                            The project implements a standard layered architecture (Controller, Service, Repository) to handle CRUD operations for user data.
                            Key features include database configuration, and API testing using <span class="text-white">Postman</span>.
                        </p>
                        <div class="text-sm text-gray-500 font-mono">
                            <span class="block">Workflow: Initialization • Coding • Testing</span>
                        </div>
                    </div>
                    <div class="md:w-1/2 order-2 mt-6 md:mt-0 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                        <div class="glass p-6 rounded-xl border border-cyan-500/20 flex items-center justify-center gap-4 hover:bg-cyan-500/5 transition-colors">
                            <div class="p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <div class="text-left">
                                <div class="text-white font-bold">Tech Stack</div>
                                <div class="text-cyan-400 text-sm">Java, SpringBoot, MySQL, Postman</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Assignment 2: AWS Guide */}
            <div class="relative mb-16 md:mb-24 group">
                <div class="hidden md:block journey-node top-8 !border-indigo-500 shadow-indigo-500/50"></div>
                <div class="md:flex items-center justify-between gap-8">
                    <div class="md:w-1/2 order-2 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                        <div class="inline-block mb-2">
                            <span class="text-indigo-400 font-bold tracking-wider text-sm uppercase">Assignment 2: The Documentation</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">AWS Deployment Guide</h3>
                        <p class="text-gray-400 leading-relaxed">
                            I learned AWS from scratch by creating the <span class="text-white">AWS Deployment Guide</span>. This experience showed me documentation is as important as code. Writing the "How-To" guide built my real confidence managing the unfamiliar AWS console, teaching me to handle cloud resources effectively.
                        </p>
                    </div>
                    <div class="md:w-1/2 order-1 mt-6 md:mt-0 md:text-right scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-left">
                        <div class="glass p-6 rounded-xl border border-indigo-500/20 flex items-center justify-center gap-4 hover:bg-indigo-500/5 transition-colors">
                            <div class="text-right">
                                <div class="text-white font-bold">Skill Unlocked</div>
                                <div class="text-indigo-400 text-sm">Cloud Documentation</div>
                            </div>
                            <div class="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Assignment 3: Docker Theory */}
            <div class="relative mb-16 md:mb-24 group">
                <div class="hidden md:block journey-node top-8 !border-blue-500 shadow-blue-500/50"></div>
                <div class="md:flex items-center justify-between gap-8">
                    <div class="md:w-1/2 md:text-right order-1 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-left">
                        <div class="inline-block mb-2">
                            <span class="text-blue-400 font-bold tracking-wider text-sm uppercase">Assignment 3: The Theory</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Docker & Containerization</h3>
                        <p class="text-gray-400 leading-relaxed">
                            Research on <span class="text-white">Docker & Containerization</span> completely changed my view of resource use. Moving from heavy Virtual Machines (VMs) to lightweight containers showed me a much better way to build software. Understanding the theory was key to using Docker easily in my projects.
                        </p>
                    </div>
                    <div class="md:w-1/2 order-2 mt-6 md:mt-0 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                        <div class="glass p-6 rounded-xl border border-blue-500/20 flex items-center justify-center gap-4 hover:bg-blue-500/5 transition-colors">
                            <div class="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div class="text-left">
                                <div class="text-white font-bold">Concept</div>
                                <div class="text-blue-400 text-sm">VMs vs Containers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Lab Activity: Docker Practice */}
            <div class="relative mb-16 md:mb-24 group">
                <div class="hidden md:block journey-node top-8 !border-teal-500 shadow-teal-500/50"></div>
                <div class="md:flex items-center justify-between gap-8">
                    <div class="md:w-1/2 order-2 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                        <div class="inline-block mb-2">
                            <span class="text-teal-400 font-bold tracking-wider text-sm uppercase">Lab Activity: The Practice</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">Docker Image Deployment</h3>
                        <p class="text-gray-400 leading-relaxed">
                            The most important moment was when I successfully used the <span class="text-white">Docker Image</span>. Getting the application to run the same everywhere was very satisfying. This fixed the problem of code that "only works on my computer," which showed me how powerful portability is for software.
                        </p>
                    </div>
                    <div class="md:w-1/2 order-1 mt-6 md:mt-0 md:text-right scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-left">
                        <div class="glass p-6 rounded-xl border border-teal-500/20 flex items-center justify-center gap-4 hover:bg-teal-500/5 transition-colors">
                            <div class="text-right">
                                <div class="text-white font-bold">Achievement</div>
                                <div class="text-teal-400 text-sm">First Docker Image</div>
                            </div>
                            <div class="p-3 rounded-lg bg-teal-500/20 text-teal-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Assignment 4: Narrative Report */}
            <div class="relative mb-16 md:mb-24 group">
                <div class="hidden md:block journey-node top-8 !border-purple-500 shadow-purple-500/50"></div>
                <div class="md:flex items-center justify-between gap-8">
                    <div class="md:w-1/2 md:text-right order-1 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-left">
                        <div class="inline-block mb-2">
                            <span class="text-purple-400 font-bold tracking-wider text-sm uppercase">Assignment 4: The Analysis</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">Narrative Report</h3>
                        <p class="text-gray-400 leading-relaxed">
                            The <span class="text-white">Narrative Report</span> honed my technical writing soft skills.
                            Synthesizing complex cloud concepts into a coherent narrative forced me to structure my thoughts and deepen my understanding.
                            It highlighted that being an engineer is also about being an effective communicator.
                        </p>
                    </div>
                    <div class="md:w-1/2 order-2 mt-6 md:mt-0 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                        <div class="glass p-6 rounded-xl border border-purple-500/20 flex items-center justify-center gap-4 hover:bg-purple-500/5 transition-colors">
                            <div class="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div class="text-left">
                                <div class="text-white font-bold">Soft Skill</div>
                                <div class="text-purple-400 text-sm">Technical Writing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Assignment 5: Kubernetes */}
            <div class="relative mb-16 md:mb-24 group">
                <div class="hidden md:block journey-node top-8 !border-pink-500 shadow-pink-500/50"></div>
                <div class="md:flex items-center justify-between gap-8">
                    <div class="md:w-1/2 order-2 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                        <div class="inline-block mb-2">
                            <span class="text-pink-400 font-bold tracking-wider text-sm uppercase">Assignment 5: The Scaling</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors">Kubernetes Home Lab Activity</h3>
                        <p class="text-gray-400 leading-relaxed">
                            The <span class="text-white">Kubernetes Home Lab</span> with Minikube was a hands-on deep dive into orchestration.
                            From debugging containers with <span class="text-white">kubectl exec</span> to deploying a stateful WordPress & MySQL stack, it bridged the gap between theory and practice.
                            It was a crash course in managing distributed systems and understanding how applications self-heal.
                        </p>
                    </div>
                    <div class="md:w-1/2 order-1 mt-6 md:mt-0 animate-slide-in-left md:text-right">
                        <div class="glass p-6 rounded-xl border border-pink-500/20 flex items-center justify-center gap-4 hover:bg-pink-500/5 transition-colors">
                            <div class="text-right">
                                <div class="text-white font-bold">Tool Mastery</div>
                                <div class="text-pink-400 text-sm">Minikube & K8s</div>
                            </div>
                            <div class="p-3 rounded-lg bg-pink-500/20 text-pink-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. Assignment 6: Terraform */}
            <div class="relative mb-16 md:mb-24 group">
                <div class="hidden md:block journey-node top-8 !border-orange-500 shadow-orange-500/50"></div>
                <div class="md:flex items-center justify-between gap-8">
                    <div class="md:w-1/2 md:text-right order-1 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-left">
                        <div class="inline-block mb-2">
                            <span class="text-orange-400 font-bold tracking-wider text-sm uppercase">Assignment 6: The Automation</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">Terraform Survivor</h3>
                        <p class="text-gray-400 leading-relaxed">
                            Building <span class="text-white">Terraform Survivor</span> transformed Infrastructure as Code from a dry concept into a tangible mechanic.
                            By using Terraform to control game difficulty and resource decay, I experienced firsthand how configuration changes can drastically alter an environment.
                            It was a unique way to gamify the learning of state management and automation.
                        </p>
                    </div>
                    <div class="md:w-1/2 order-2 mt-6 md:mt-0 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                        <div class="glass p-6 rounded-xl border border-orange-500/20 flex items-center justify-center gap-4 hover:bg-orange-500/5 transition-colors">
                            <div class="p-3 rounded-lg bg-orange-500/20 text-orange-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div class="text-left">
                                <div class="text-white font-bold">Paradigm</div>
                                <div class="text-orange-400 text-sm">Infrastructure as Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
