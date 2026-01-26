<script lang="ts">
    import "../app.css";
    import { page } from '$app/stores';

    let { children } = $props();

    let scrollY = $state(0);
    
    let floatThreshold = $derived($page.data.navFloatThreshold ?? 50);
    let allowFloating = $derived($page.data.allowFloatingNav ?? false);
    
    let isHome = $derived($page.url.pathname === '/');
    let isScrolled = $derived(scrollY > floatThreshold);
    let isFloating = $derived(allowFloating && isScrolled);

    let navStyles = $derived.by(() => {
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

    let readablePathName = $derived.by(() => {
        const path = $page.url.pathname;
        if (path === '/') return '';
        return ' / ' + path.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' / ');
    });
</script>

<svelte:window bind:scrollY />

<svelte:head>
  <title>Tom Mercer</title>
</svelte:head>

<div class="min-h-screen text-black dark:text-white">
    <nav class="hidden md:flex fixed left-0 right-0 z-50 justify-center transition-all duration-500 {navStyles.wrapper}">
        
        <div class={navStyles.backdrop}></div>

        <div class="w-full flex items-center justify-between transition-all duration-500 {navStyles.inner}">
            <a href="/" class="font-[forma-djr-display] font-semibold tracking-wide text-lg {navStyles.text}">
                Tom Mercer {readablePathName}
            </a>

            <div class="flex gap-6 text-sm font-[forma-djr-display] font-semibold tracking-wide {navStyles.text}">
                <a href="/#projects" class="hover:opacity-70 transition-opacity">Projects</a>
                <a href="/project" class="hover:opacity-70 transition-opacity">Drive Mind</a>
                <a href="/contact" class="hover:opacity-70 transition-opacity">Contact</a>
            </div>
        </div>
    </nav>

    <main>
        {@render children()}
    </main>

    <footer class="w-full border-t border-gray-200 dark:border-gray-800 mt-12 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-[forma-djr-text]">
        <div>
            © {new Date().getFullYear()} Tom Mercer. All rights reserved.
        </div>
        <div class="hidden sm:block">•</div>
        <div>
            Built with SvelteKit.
        </div>
    </footer>
</div>