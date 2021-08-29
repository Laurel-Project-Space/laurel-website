import Link from "@/types/Link";
import Event from "@/types/Event";
import Info from "@/types/Info"

export interface LinkRepository {
    getAll(): Promise<Array<Link>>
}

export interface EventRepository {
    getAll(): Promise<Array<Event>>
}

export interface InfoRepository {
    getAll(): Promise<Array<Info>>
}
