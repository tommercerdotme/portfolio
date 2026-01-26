<script lang="ts">
    import ProjectBoxTag from "$lib/components/ProjectBoxTag.svelte";
    import BlurryLights1 from "$lib/backgrounds/BlurryLights1.svelte";

    import type { ProjectData } from '$lib/types';
    import { projects } from '$lib/data/projects';

    let scrollY = $state(0);

    const project: ProjectData = projects[1];
</script>

<svelte:window bind:scrollY />

<div class="pt-14 pl-12 pr-12 relative overflow-hidden">
    
    <div 
    class="absolute inset-0 z-0 pointer-events-none" 
    style="transform: translateY({scrollY * 0.6}px);">
        <BlurryLights1 />
    </div>
    <div class="relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl font-[forma-djr-display] font-bold pt-6 mb-4">
                    {project.title}
                </h1>
                <p class="text-md font-[forma-djr-text]">
                    {project.description_full}
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                    {#each project.tags as tag }
                        <ProjectBoxTag tag={tag.name} showingDot={tag.showingDot} dotColor={tag.dotColor} />
                    {/each}
                </div>
            </div>
            <div class="max-w-lg rounded-lg justify-self-end mask-r-from-90% mask-b-from-90%">
                <img src="https://f003.backblazeb2.com/file/tommercer-me-data-public/drive-minder-hero-dark.png" alt="Drive Minder Screenshot" class="inset-y-0 aspect-1045/924 right-0 rounded-lg "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
            <div class="max-w-sm"> 
                <h2 class="text-2xl font-[forma-djr-display] font-bold mt-12 mb-2">
                    The Problem
                </h2>
                <p class="text-md font-[forma-djr-text]">
                    Managing files on external drives can be a hassle, especially when juggling multiple projects across different devices. I often found myself forgetting which files were stored where, leading to wasted time searching through drives or, worse, losing important data. I needed a solution that would help me keep track of my files.
                </p>
            </div>
            <div class="max-w-sm"> 
                <h2 class="text-2xl font-[forma-djr-display] font-bold mt-12 mb-2">
                    The Solution
                </h2>
                <p class="text-md font-[forma-djr-text]">
                    Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p> 
            </div>
        </div>
        
        <div>
            <h2 class="text-2xl font-[forma-djr-display] font-bold mt-12 mb-2">
                Highlights
            </h2>
            <p class="text-md font-[forma-djr-text]">
                Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>

        <div>
            <div class="w-sm h-sm bg-gray-200 dark:bg-gray-800 rounded-lg mt-6 mb-12 p-6 flex items-start">
                <h3 class="text-md font-[forma-djr-text] font-medium">
                    High-performance scanning
                </h3>
            </div>
        </div>
        
    </div>
    
</div>