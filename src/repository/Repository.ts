import Link from "@/types/link";
import Event from "@/types/Event";

export interface LinkRepository {
    getAll(): Promise<Array<Link>>
}

export interface EventRepository {
    getAll(): Promise<Array<Event>>
}
