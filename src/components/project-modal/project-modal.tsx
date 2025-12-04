import { component$, Slot, type PropFunction } from '@builder.io/qwik';

interface ProjectModalProps {
    isOpen: boolean;
    onClose$: PropFunction<() => void>;
    title: string;
}

export default component$<ProjectModalProps>(({ isOpen, onClose$, title }) => {
    if (!isOpen) return null;

    return (
        <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                class="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
                onClick$={onClose$}
            ></div>

            {/* Modal Content */}
            <div class="relative w-full max-w-6xl h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col animate-fade-in">

                {/* Header */}
                <div class="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <h2 class="text-2xl font-bold text-white">{title}</h2>
                    <button
                        onClick$={onClose$}
                        class="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div class="flex-1 overflow-y-auto p-6 bg-slate-950">
                    <Slot />
                </div>
            </div>
        </div>
    );
});
