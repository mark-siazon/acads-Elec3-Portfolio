import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default component$(() => {
    return (
        <>
            <div class="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
                <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-float"></div>
                <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
                <div class="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-pink-500/10 blur-[100px] animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
            <Header />
            <main class="min-h-screen">
                <Slot />
            </main>
            <Footer />
        </>
    );
});
