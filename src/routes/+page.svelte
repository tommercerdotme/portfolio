<script lang="ts">
    import type { ProjectData } from '$lib/types';
    import ProjectBox from '$lib/components/ProjectBox.svelte';
    import { projects } from '$lib/data/projects';
</script>

<div class="h-svh  bg-radial-[at_90%_90%] from-sky-200 dark:from-blue-400 via-blue-400 dark:via-indigo-900 to-indigo-900 dark:to-slate-900 to-90% flex sm:items-center items-end sm:px-12 px-8 sm:pb-0 pb-36 text-white">
    <div>
        <h1 class="text-6xl font-[forma-djr-display] font-bold mb-4 select-none">
            Hi, I'm Tom!
        </h1>
        <p class="text-2xl font-[forma-djr-text] max-w-3xl select-none">
            Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <button class="mt-8 px-6 py-3 bg-white text-indigo-900 font-[forma-djr-text] font-medium rounded-lg hover:bg-gray-200 transition">
            Learn More →
        </button>
    </div>
</div>

<div class="flex flex-col sm:pl-12 pl-8 pt-12 pr-12">
    <h2 class="text-4xl font-[forma-djr-display] font-bold mb-4 select-none">
        Featured Projects
    </h2>
    <p class="text-lg font-[forma-djr-text] max-w-3xl select-none">
        Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
</div>  

<div class="mt-6 overflow-x-auto pb-12 overscroll-x-contain">
    <div class="flex gap-3 snap-x snap-mandatory pb-4">
        <div class="shrink-0 w-3"></div>

        {#each projects as project}
            <ProjectBox contents={project} />
        {/each}

        <div class="shrink-0 w-12"></div>
    </div>
</div>