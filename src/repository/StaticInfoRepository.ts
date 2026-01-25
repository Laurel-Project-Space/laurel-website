import Info from "@/types/Info";
import {InfoRepository} from "@/repository/Repository";

import infosData from "@/assets/api/infos.json";

export default class StaticInfoRepository implements InfoRepository {

    public async getAll(): Promise<Array<Info>> {
        return infosData.map((e): Info => ({
            id: e.id,
            title: e.title,
            description: e.description,
        }));
    }
}
