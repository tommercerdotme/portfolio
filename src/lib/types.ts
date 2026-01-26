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
