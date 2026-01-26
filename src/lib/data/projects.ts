import type { ProjectData } from '$lib/types';

export const projects: ProjectData[] = [
    {
        title: 'Portfolio Site',
        description_short: 'A personal portfolio website showcasing my projects and skills.',
        description_full: 'A personal portfolio website showcasing my projects and skills.',
        imageUrl: 'src/lib/images/placeholder.jpg',
        projectUrl: 'https://youtu.be/dQw4w9WgXcQ',
        tags : [
            {
                name: 'SvelteKit',
                showingDot: true,
                dotColor: 'bg-green-500'
            },
            {
                name: 'TypeScript',
                showingDot: true,
                dotColor: 'bg-blue-500'
            }
        ],
        id: 0
    },
    {
        title: 'Drive Mind',
        description_short: 'A custom macOS utility to track files on external drives.',
        description_full: 'I built Drive Mind to take the guesswork out of external storage. The app scans a drive, builds a persistent index of its folder structure, and lets me browse it later in a familiar column view designed to mirror the macOS Finder. An inspector panel lets me customise the drive, search its contents, and generate descriptive notes with private, on-device AI.',
        imageUrl: 'src/lib/images/placeholder.jpg',
        projectUrl: '/project',
        tags: [
            {
                name: 'Swift',
                showingDot: true,
                dotColor: 'bg-orange-500'
            },
            {
                name: 'SwiftUI',
                showingDot: true,
                dotColor: 'bg-blue-500'
            },
            {
                name: 'macOS',
                showingDot: true,
                dotColor: 'bg-gray-500'
            }
        ],
        id: 1
    },
    {
        title: 'Project Three',
        description_short: 'Desc',
        description_full: 'Desc',
        imageUrl: 'src/lib/images/placeholder.jpg',
        projectUrl: '#',
        tags: [
            {
                name: 'tag3',
            }
        ],
        id: 2
    },
    {
        title: 'Project Four',
        description_short: 'Desc',
        description_full: 'Desc',
        imageUrl: 'src/lib/images/placeholder.jpg',
        projectUrl: '#',
        tags: [
            {
                name: 'tag4',
            }
        ],
        id: 3
    },
    {
        title: 'Project Five',
        description_short: 'Desc',
        description_full: 'Desc',
        imageUrl: 'src/lib/images/placeholder.jpg',
        projectUrl: '#',
        tags: [
            {
                name: 'tag5',
            }
        ],
        id: 4
    },    
];