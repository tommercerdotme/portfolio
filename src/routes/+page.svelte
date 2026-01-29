<script lang="ts">
    import type { ProjectData } from '$lib/types';
    import ProjectBox from '$lib/components/ProjectBox.svelte';
    import { projects } from '$lib/data/projects';
    import { scrollTo, smoothScrollTo } from '$lib/utils/ScrollUtils';
    import { socialMedia } from '$lib/data/social';
</script>

<div class="h-svh bg-radial-[at_90%_90%] from-sky-200 dark:from-blue-400 via-blue-400 dark:via-indigo-900 to-indigo-900 dark:to-slate-900 to-90% flex sm:items-center items-end sm:px-12 px-8 sm:pb-0 pb-36 text-white">
    <div 
        class="absolute inset-0 mix-blend-overlay pointer-events-none"
        style="background-image: url('/src/lib/images/noise.png'); background-size: 200px 200px; background-repeat: repeat;"
    ></div>

    <div>
        <h1 class="text-6xl font-[forma-djr-display] font-bold mb-4 select-none">
            Hi, I'm Tom!
        </h1>
        <p class="text-2xl font-[forma-djr-text] max-w-3xl select-none">
            I'm a civil engineering student based in the UK.  
        </p>
        

        <button 
            on:click={() => smoothScrollTo('about')}
            class="mt-8 px-6 py-3 bg-white text-indigo-900 font-[forma-djr-text] font-medium rounded-lg hover:bg-gray-200 transition">
            Learn More →
        </button>
        
    </div>
</div>

<div>
    <div id="about" class="flex flex-col sm:pl-12 pl-8 pt-24 pr-12 snap-align-start snap-always">
        <h2 class="text-4xl font-[forma-djr-display] font-bold mb-4 select-none">
            About Me
        </h2>
        <p class="text-lg font-[forma-djr-text] max-w-3xl select-none">
            I'm currently studying civil engineering at university in Bristol, UK. Alongside my studies, I enjoy photography, design, and music. Recently, I have been teaching myself how to create software products. This website represents my first foray into coding for the web, which I hope to eventually grow into a place for my showcase my hobbies.
        </p>
        <p class="text-lg font-[forma-djr-text] max-w-3xl select-none pt-5">
            Feel free to explore, check out some of what I have created, and get in touch if you'd like to connect!
        </p>
        <div class="pt-6">
            {#each socialMedia as social}
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <img src={social.iconPathLight} alt={social.name + " Logo"} class="hidden dark:inline-block mr-4 max-h-6 opacity-75 hover:opacity-100 transition duration-100"/>
                    <img src={social.iconPathDark} alt={social.name + " Logo"} class="dark:hidden inline-block mr-4 max-h-6 opacity-75 hover:opacity-100 transition duration-100"/>
                </a>
            {/each}
        </div>
    </div>
</div>

<div>
    <div id="projects" class="flex flex-col sm:pl-12 pl-8 pt-24 pr-12 snap-align-start snap-always">
        <h2 class="text-4xl font-[forma-djr-display] font-bold mb-4 select-none">
            Featured Projects
        </h2>
        <p class="text-lg font-[forma-djr-text] max-w-3xl select-none">
            Here are some of the projects I've been working on recently. Click on any project to learn more about it!
        </p>
    </div>  

    <div class="overflow-x-auto pb-12 overscroll-x-contain no-scrol">
        <div class="flex gap-3 snap-x snap-mandatory pb-4 pt-6">
            <div class="shrink-0 w-3"></div>

            {#each projects as project}
                <ProjectBox contents={project} />
            {/each}

            <div class="shrink-0 w-12"></div>
        </div>
    </div>  
</div> 

