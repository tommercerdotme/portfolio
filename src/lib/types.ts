// src/lib/types.ts

// project data is used in projects.ts and ProjectBox.svelte to type centralise the project data structure
export interface ProjectData {
    id: number;
    title: string;
    description_short: string;
    description_full: string;
    imageUrl: string;
    projectUrl: string;
    tags: {
        name: string;
        showingDot?: boolean;
        dotColor?: string;
    }[];
}

// social media data is used in social.ts to type centralise all of the social media links and icons
export interface SocialMediaData {
    name: string;
    url: string;
    iconPathLight: string;
    iconPathDark: string;
}

export interface NavigationLinks {
    displayName: string;
    destination: string;
}