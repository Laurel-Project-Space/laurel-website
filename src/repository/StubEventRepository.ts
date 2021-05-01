import moment from "moment";

import Event from "@/types/Event";
import Image from "@/types/Image";

import {EventRepository} from "@/repository/repository";

const images: Array<Image> = [
  {
    "id": "605f1c7c9b536f001507128c",
    "name": "art-oost-1.jpg",
    "alternativeText": "",
    "caption": "",
    "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616845945/art_oost_1_ea23228c04.jpg",
    "formats": {
      "thumbnail": {
        "width": 104,
        "height": 156,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616845945/thumbnail_art_oost_1_ea23228c04.jpg",
      },
      "large": {
        "width": 667,
        "height": 1000,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616845946/large_art_oost_1_ea23228c04.jpg",
      },
      "medium": {
        "width": 500,
        "height": 750,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616845947/medium_art_oost_1_ea23228c04.jpg",
      },
      "small": {
        "width": 333,
        "height": 500,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616845948/small_art_oost_1_ea23228c04.jpg",
      }
    },
    "width": 1000,
    "height": 1500,
  },
  {
    "id": "605f1d219b536f001507128e",
    "name": "art-oost-2.jpg",
    "alternativeText": "",
    "caption": "",
    "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616846110/art_oost_2_d11a8cc0c8.jpg",
    "formats": {
      "thumbnail": {
        "width": 104,
        "height": 156,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616846111/thumbnail_art_oost_2_d11a8cc0c8.jpg",
      },
      "large": {
        "width": 667,
        "height": 1000,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616846112/large_art_oost_2_d11a8cc0c8.jpg",
      },
      "medium": {
        "width": 500,
        "height": 750,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616846113/medium_art_oost_2_d11a8cc0c8.jpg",
      },
      "small": {
        "width": 333,
        "height": 500,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616846113/small_art_oost_2_d11a8cc0c8.jpg",
      }
    },
    "width": 1000,
    "height": 1500,
  },
  {
    "id": "60604d41a497bf00119f2175",
    "name": "art-oost-3.jpg",
    "alternativeText": "",
    "caption": "",
    "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923960/art_oost_3_0fc275cb02.jpg",
    "formats": {
      "thumbnail": {
        "width": 104,
        "height": 156,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923961/thumbnail_art_oost_3_0fc275cb02.jpg",
      },
      "large": {
        "width": 667,
        "height": 1000,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923964/large_art_oost_3_0fc275cb02.jpg",
      },
      "medium": {
        "width": 500,
        "height": 750,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923966/medium_art_oost_3_0fc275cb02.jpg",
      },
      "small": {
        "width": 333,
        "height": 500,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923969/small_art_oost_3_0fc275cb02.jpg",
      }
    },
    "width": 1000,
    "height": 1500,
  },
  {
    "id": "60604d42a497bf00119f2176",
    "name": "art-oost-4.jpg",
    "alternativeText": "",
    "caption": "",
    "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923961/art_oost_4_c90d6fe4d5.jpg",
    "formats": {
      "thumbnail": {
        "width": 234,
        "height": 156,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923962/thumbnail_art_oost_4_c90d6fe4d5.jpg",
      },
      "large": {
        "width": 1000,
        "height": 667,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923965/large_art_oost_4_c90d6fe4d5.jpg",
      },
      "medium": {
        "width": 750,
        "height": 500,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923969/medium_art_oost_4_c90d6fe4d5.jpg",
      },
      "small": {
        "width": 500,
        "height": 333,
        "url": "https://res.cloudinary.com/dhft1w7ck/image/upload/v1616923970/small_art_oost_4_c90d6fe4d5.jpg",
      }
    },
    "width": 1500,
    "height": 1000,
  },
]

export default class StubEventRepository implements EventRepository {
    public async getAll(): Promise<Array<Event>> {
        return [{
          id: '1',
          slug: 'example-event-1',
          title: 'example event 1',
          startDate: moment().subtract(10, 'days').toDate(),
          artists: 'some artist, another artist',
          description: 'This is the description of the show.',
          upcoming: true,
          images: images,
        }, {
          id: '2',
          slug: 'example-event-2',
          title: 'example event 2',
          startDate: moment("20111031", "YYYYMMDD").toDate(),
          endDate: moment("20120620", "YYYYMMDD").toDate(),
          artists: 'some artist, another artist',
          curator: 'some curator',
          description: 'This is the description of the show.',
          upcoming: false,
          images: images,
        }, {
          id: '3',
          slug: 'example-event-3',
          title: 'example event 3',
          startDate: moment("20111031", "YYYYMMDD").toDate(),
          endDate: moment("20120620", "YYYYMMDD").toDate(),
          artists: 'some artist, another artist',
          curator: 'some curator',
          description: 'This is the description of the show.',
          upcoming: false,
          images: images,
        }];
    }
}
