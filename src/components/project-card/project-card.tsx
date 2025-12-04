import { component$, type PropFunction } from '@builder.io/qwik';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    icon?: any;
    pdf?: string;
    demo?: string;
    onClick$?: PropFunction<() => void>;
}

export default component$<ProjectCardProps>(({ title, description, tags, image, icon, pdf, demo, onClick$ }) => {
    return (
        <div
            class="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            onClick$={onClick$}
        >
            {/* Glowing Border Effect */}
            <div class="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-700 group-hover:duration-200"></div>

            {/* Spotlight/Sheen Effect */}
            <div class="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>

            <div class="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800/50 overflow-hidden flex flex-col z-10">
                <div class="h-52 bg-slate-800 relative overflow-hidden group-hover:h-48 transition-all duration-500">
                    {image ? (
                        <img src={image} alt={title} width={800} height={400} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-700 group-hover:to-slate-800 transition-colors">
                            <span class="text-6xl filter drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] animate-float">
                                {icon || '🚀'}
                            </span>
                        </div>
                    )}

                    {/* Mini Pill Indicators */}
                    <div class="absolute top-3 right-3 flex gap-2 z-20">
                        {demo && (
                            <span class="px-2 py-1 bg-green-500/80 text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg backdrop-blur-sm border border-green-400/30 flex items-center gap-1">
                                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                Live
                            </span>
                        )}
                        {pdf && (
                            <span class="px-2 py-1 bg-red-500/80 text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg backdrop-blur-sm border border-red-400/30 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                </svg>
                                PDF
                            </span>
                        )}
                    </div>

                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span class="px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 rounded-full font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Details
                        </span>
                    </div>
                </div>

                <div class="p-6 flex-1 flex flex-col relative">
                    <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">{title}</h3>
                    <p class="text-gray-400 mb-6 text-sm line-clamp-3 leading-relaxed flex-1 group-hover:text-gray-300 transition-colors">{description}</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        {tags.map((tag) => (
                            <span key={tag} class="px-3 py-1 bg-slate-800/80 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});
