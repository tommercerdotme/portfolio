<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import "../app.css";

    let { children } = $props();
    let rawY = $state(0);
    let y = $derived(Math.max(0, rawY));
    let isScrolled = $derived(y > 50);
</script>

<svelte:window bind:scrollY={rawY} />

<svelte:head>
  <title>Tom Mercer</title>
</svelte:head>

<div class="min-h-screen text-black dark:text-white">

    <main>
        {@render children()}
    </main>
</div>