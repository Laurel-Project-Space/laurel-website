import Link from "@/types/Link";
import Event from "@/types/Event";

export interface LinkRepository {
    getAll(): Promise<Array<Link>>
}

export interface EventRepository {
    getAll(): Promise<Array<Event>>
}
