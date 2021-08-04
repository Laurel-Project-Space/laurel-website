import Link from "@/types/Link";

import {LinkRepository} from "@/repository/Repository";

export default class StubLinkRepository implements LinkRepository {
    public async getAll(): Promise<Array<Link>> {
        return [{
          id: '1',
          name: 'Instagram',
          url: 'https://google.com',
        }, {
          id: '2',
          name: 'Facebook',
          url: 'https://facebook.com',
        }, {
            id: '1',
            name: 'Email',
            url: 'https://google.com',
        }, {
            id: '2',
            name: 'Newsletter',
            url: 'https://facebook.com',
        }, {
            id: '2',
            name: 'Directions',
            url: 'https://facebook.com',
        }];
    }
}
