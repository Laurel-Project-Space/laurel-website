import Link from "@/types/link";

import {LinkRepository} from "@/repository/repository";

export default class CMSLinkRepository implements LinkRepository {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public async getAll(): Promise<Array<Link>> {
        return fetch(`${this.url}/links`).then(response => response.json())
    }
}
