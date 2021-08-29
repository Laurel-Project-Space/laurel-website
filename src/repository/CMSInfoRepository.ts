import Info from "@/types/Info"

import {InfoRepository} from "@/repository/Repository";

export default class CMSInfoRepository implements InfoRepository {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public async getAll(): Promise<Array<Info>> {
        const response = await fetch(`${this.url}/infos`).then(response => response.json());
        return response.map(CMSInfoRepository.deserialize);
    }

    private static deserialize(e: any): Info {
        const info: Info = {
            id: e.id,
            description: e.description,
        };

        return info;
    }
}
