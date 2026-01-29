<script lang="ts">
    import { page } from '$app/stores';
    import { House } from '@lucide/svelte';
</script>

<div class="h-svh flex sm:items-center items-end sm:px-12 px-8">
    <div class="">
        <h1 class="text-6xl font-[forma-djr-display] font-bold mb-4 select-none">
            Error: {$page.status}
        </h1>
        <p class="text-2xl font-[forma-djr-text] max-w-3xl select-none">
            {#if $page.status === 404}
                The page "tommercer.me{$page.url.pathname}" doesn't exist. Please double check the URL or return to the homepage.
            {:else if $page.status >= 500}
                Something went wrong on our end. Please try again later or return to the homepage.
            {:else}
                An unexpected error occurred. Please return to the homepage.
            {/if}
        </p>
        
        <a href="/">  
        <button 
            class="mt-8 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-[forma-djr-text] font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition flex items-center gap-2">
            <House class="w-5 h-5" /> Home
        </button>
        </a>
    </div>
</div>