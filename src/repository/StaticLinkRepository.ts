import Link from "@/types/Link";
import {LinkRepository} from "@/repository/Repository";

import linksData from "@/assets/api/links.json";

export default class StaticLinkRepository implements LinkRepository {

    public async getAll(): Promise<Array<Link>> {
        return linksData.map((item): Link => ({
            id: item.id,
            name: item.name,
            url: item.link,
        }));
    }
}
