import Metadata from "@/types/Metadata.ts";

export default interface Image {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    formats: {
        thumbnail?: Metadata;
        large?: Metadata;
        medium?: Metadata;
        small?: Metadata;
    };
    url: string;
    width: number;
    height: number;
}
