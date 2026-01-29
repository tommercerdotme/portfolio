import { writable, derived } from 'svelte/store';
import { page } from '$app/stores';

export const scrollY = writable(0);

export function createNavigationStore() {
    const navState = derived([scrollY, page], ([$scrollY, $page]) => {
        const floatThreshold = $page.data.navFloatThreshold ?? 50;
        const allowFloating = $page.data.allowFloatingNav ?? false;
        const isHome = $page.url.pathname === '/';
        const isScrolled = $scrollY > floatThreshold;
        const isFloating = allowFloating && isScrolled;

        return {
            isHome,
            isScrolled,
            isFloating,
            allowFloating,
            floatThreshold
        };
    });

    const navStyles = derived([scrollY, page], ([$scrollY, $page]) => {
        const floatThreshold = $page.data.navFloatThreshold ?? 50;
        const allowFloating = $page.data.allowFloatingNav ?? false;
        const isHome = $page.url.pathname === '/';
        const isScrolled = $scrollY > floatThreshold;
        const isFloating = allowFloating && isScrolled;

        // Base styles 
        const baseBackdrop = "absolute inset-y-0 transition-all duration-500 ease-in-out -z-10 backdrop-blur-lg backdrop-saturate-100";
        const baseText = "transition-all duration-500";

        // Home page scrolled all the way to the top / Non-floating nav base state
        let styles = {
            wrapper: "top-0 px-0",
            inner: "max-w-screen px-12 h-16",
            backdrop: `${baseBackdrop} w-full max-w-screen rounded-none bg-transparent opacity-0 blur-0`, 
            text: `${baseText} text-black dark:text-white`
        };

        // Blur for going between floating and unfloating
        if (allowFloating && !isScrolled) {
            styles.backdrop = `${baseBackdrop} w-full max-w-screen rounded-none bg-transparent opacity-0 blur-lg`;
        }

        // Make sure white text stays white on home page when not floating
        if (isHome && !isFloating) {
            styles.text = `${baseText} text-white`;
        }

        // Floating
        if (isFloating) {
            styles.wrapper = "top-4 px-4";
            styles.inner = "md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-8 h-12";
            
            styles.backdrop = `${baseBackdrop} w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-white/70 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-white/10 shadow-lg rounded-full opacity-100 blur-0`;
        } 
        // Non floating satate
        else if (isScrolled && !isHome) {
            styles.backdrop = `${baseBackdrop} w-full max-w-screen rounded-none bg-white/70 dark:bg-zinc-900/60 border-b border-gray-200/50 dark:border-white/10 shadow-lg opacity-100 blur-0`;
        }

        return styles;
    });

    return {
        scrollY,
        navState,
        navStyles
    };
}