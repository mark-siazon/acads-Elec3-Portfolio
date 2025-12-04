import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const BASE_URL = import.meta.env.BASE_URL || '/';

export default component$(() => {
  const location = useLocation();

  return (
    <header class="glass fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href={BASE_URL}
          class="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent transition-transform hover:scale-105"
        >
          ELEC3 Portfolio
        </Link>

        <nav class="hidden items-center space-x-8 md:flex">
          <Link
            href={BASE_URL}
            class={`border-b-2 pb-1 font-medium text-gray-300 transition-colors hover:text-cyan-400 ${location.url.pathname === BASE_URL || location.url.pathname === BASE_URL.slice(0, -1) ? "border-cyan-400 text-cyan-400" : "border-transparent"}`}
          >
            Home
          </Link>
          <Link
            href={`${BASE_URL}reflection`}
            class={`border-b-2 pb-1 font-medium text-gray-300 transition-colors hover:text-cyan-400 ${location.url.pathname.includes("/reflection") ? "border-cyan-400 text-cyan-400" : "border-transparent"}`}
          >
            Reflections
          </Link>
          <a
            href="https://www.linkedin.com/in/mark-siazon/"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            LinkedIn
          </a>
        </nav>

        <button class="text-white focus:outline-none md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
});
