import Image from "@/types/Image";

export default interface Event {
    id: string;
    slug: string;
    title: string;
    upcoming: boolean;
    startDate: Date;
    endDate?: Date;
    artists?: string;
    curator?: string;
    description: string;
    images?: Array<Image>;
    // TODO: video type
}
