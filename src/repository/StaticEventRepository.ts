import slugify from "slugify";

import Event from "@/types/Event";
import {EventRepository} from "@/repository/Repository";

import eventsData from "@/assets/api/events.json";

export default class StaticEventRepository implements EventRepository {

    public async getAll(): Promise<Array<Event>> {
        return eventsData.map(StaticEventRepository.deserialize);
    }

    private static deserialize(e: any): Event {
        const event: Event = {
            id: e.id,
            slug: slugify(e.title),
            title: e.title,
            upcoming: e.upcoming,
            startDate: new Date(e.startDate),
            description: e.description,
            images: e.content,
        };

        if (e.endDate) {
            event.endDate = new Date(e.endDate);
        }

        if (e.artists) {
            event.artists = e.artists;
        }

        if (e.curator) {
            event.curator = e.curator;
        }

        if (e.images) {
            event.images = e.images;
        }

        return event;
    }
}
