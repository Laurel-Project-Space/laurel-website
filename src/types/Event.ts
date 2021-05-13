import Image from "@/types/Image";

export default interface Event {
    id: string;
    slug: string;
    title: string;
    startDate: Date;
    endDate?: Date;
    artists?: string;
    curator?: string;
    description: string;
    upcoming: boolean;
    images?: Array<Image>;
    // TODO: video type
}
