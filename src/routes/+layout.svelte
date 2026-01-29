<script lang="ts">
    import "../app.css";
    import { page } from '$app/stores';
    import { scrollTo } from "$lib/utils/ScrollUtils";
    import { createNavigationStore } from "$lib/stores/navigation";

    import type { NavigationLinks } from "$lib/types";

    let { children } = $props();

    const navigation = createNavigationStore();
    const { scrollY, navStyles } = navigation;

    let scrollYValue = $state(0);
    
    // Update the store when scrollY changes
    $effect(() => {
        scrollY.set(scrollYValue);
    });

    let readablePathName = $derived.by(() => {
        const path = $page.url.pathname;
        if (path === '/') return '';
        return ' / ' + path.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' / ');
    });

    let navLinks: NavigationLinks[] = [
        { displayName: 'About', destination: '#about' },
        { displayName: 'Projects', destination: '#projects' },
        { displayName: 'Contact', destination: '/contact' }
    ];
</script>

<svelte:window bind:scrollY={scrollYValue} />

<svelte:head>
  <title>Tom Mercer</title>
</svelte:head>

<div class="min-h-screen text-black dark:text-white">
    <nav class="hidden md:flex fixed left-0 right-0 z-50 justify-center transition-all duration-500 {$navStyles.wrapper}">
        
        <div class={$navStyles.backdrop}></div>

        <div class="w-full flex items-center justify-between transition-all duration-500 {$navStyles.inner}">
            <a href="/" class="font-[forma-djr-display] font-semibold tracking-wide text-lg {$navStyles.text}">
                Tom Mercer {readablePathName}
            </a>

            <div class="flex gap-6 text-sm font-[forma-djr-display] font-semibold tracking-wide {$navStyles.text}">
                {#each navLinks as link}
                    {#if link.destination.startsWith('#')}
                        <button 
                            onclick={() => scrollTo(link.destination.substring(1))}
                            class="hover:opacity-70 transition-opacity cursor-pointer">{link.displayName}</button>
                    {:else}
                        <a href={link.destination} class="hover:opacity-70 transition-opacity">{link.displayName}</a>
                    {/if}
                {/each}
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
    </footer>
</div>