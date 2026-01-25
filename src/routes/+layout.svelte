<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import "../app.css";

    let { children } = $props();
    let rawY = $state(0);
    // Clamp Y to 0 to prevent Safari bounce issues
    let y = $derived(Math.max(0, rawY));
    let isScrolled = $derived(y > 50);
</script>

<svelte:window bind:scrollY={rawY} />

<div class="min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <nav class="fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 {isScrolled ? 'top-4 px-4' : 'top-0 px-0'}">
        
        <div 
            class="absolute inset-y-0 transition-all duration-500 ease-in-out -z-10
            {isScrolled 
                ? 'w-full max-w-7xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-lg backdrop-saturate-100 border border-gray-200/50 dark:border-white/10 shadow-lg rounded-full opacity-100 blur-0' 
                : 'w-full max-w-screen bg-transparent opacity-0 blur-lg'}"
        ></div>

        <div class="w-full flex items-center justify-between transition-all duration-500 {isScrolled ? 'max-w-7xl px-8 h-12' : 'max-w-screen px-12 h-16'}">
            <a href="/" class="font-semibold text-lg tracking-tight">
                Tom Mercer
            </a>

            <div class="flex gap-6 text-sm font-medium">
                <a href="/#projects" class="hover:opacity-70 transition-opacity">Projects</a>
                <a href="/about" class="hover:opacity-70 transition-opacity">About</a>
                <a href="/contact" class="hover:opacity-70 transition-opacity">Contact</a>
            </div>
        </div>
    </nav>

    <main>
        {@render children()}
    </main>
</div>