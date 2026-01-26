<script lang="ts">
    import type { ProjectData } from '$lib/types';

    import ProjectBoxTag from './ProjectBoxTag.svelte';

    let { contents }: { contents: ProjectData } = $props(); 
</script>

<a href={contents.projectUrl} class="shrink-0 w-80 snap-start border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-[transform,box-shadow,background-color,scale] ease-in-out duration-[0.25s] hover:bg-white hover:dark:bg-gray-900">
    <img
        src={contents.imageUrl}
        alt={contents.title}
        class="aspect-square w-full rounded-md mb-4"
    />
    <h3 class="text-2xl font-[forma-djr-display] font-semibold mb-2">
        {contents.title}
    </h3>
    <p class="font-[forma-djr-text]">
        {contents.description_short}
    </p>
    
    <div class="mt-4 flex flex-wrap gap-2">
        {#each contents.tags as tag}
            <ProjectBoxTag tag={tag.name} showingDot={tag.showingDot} dotColor={tag.dotColor} />
        {/each}
    </div>
</a>