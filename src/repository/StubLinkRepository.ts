import Link from "@/types/link";

import {LinkRepository} from "@/repository/repository";

export default class StubLinkRepository implements LinkRepository {
    public async getAll(): Promise<Array<Link>> {
        return [{
          id: '1',
          name: 'link 1',
          url: 'https://google.com',
        }, {
          id: '2',
          name: 'link 2',
          url: 'https://facebook.com',
        }];
    }
}
