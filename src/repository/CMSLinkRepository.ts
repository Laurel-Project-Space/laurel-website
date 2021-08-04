import Link from "@/types/Link";

import {LinkRepository} from "@/repository/Repository";

export default class CMSLinkRepository implements LinkRepository {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public async getAll(): Promise<Array<Link>> {
        return fetch(`${this.url}/links`).then(response => response.json())
    }
}
