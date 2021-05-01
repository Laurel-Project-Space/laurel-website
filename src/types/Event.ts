export default interface Event {
    id: string;
    slug: string;
    title: string;
    startDate: string;
    endDate?: string;
    artists: string;
    curator?: string;
    description: string;
    upcoming: boolean;
    // TODO: add images / videos types
}
