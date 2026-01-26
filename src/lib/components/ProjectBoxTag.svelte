<script lang="ts">
    let { 
        tag, 
        showingDot = false, 
        dotColor = 'bg-gray-500' 
    } = $props();
</script>

<div class="height-6 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 flex items-center w-max max-w-full gap-1">
    {#if showingDot}
        <span class="inline-block w-2 h-2 rounded-full mr-2 {dotColor}"></span>
    {/if}
    <p class="text-sm font-[forma-djr-text] -translate-y-px">
        {tag}
    </p>
</div>