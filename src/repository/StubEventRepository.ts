import moment from "moment";

import Event from "@/types/Event";
import Image from "@/types/Image";

import {EventRepository} from "@/repository/repository";

const images: Array<Image> = [
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
]

export default class StubEventRepository implements EventRepository {
    public async getAll(): Promise<Array<Event>> {
        return [{
          id: '1',
          slug: 'example-event-1',
          title: 'Our Seas Are What We Make of Them',
          startDate: moment("20120620", "YYYYMMDD").toDate(),
          endDate: moment("20120623", "YYYYMMDD").toDate(),
          artists: 'Sophie Utikal, Anto López Espinosa, Kristina Õllek, Sara Milio, Enar de Dios Rodriguez, Baratto & Mouravas',
          curator: 'Angeliki Tzortzakaki',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          upcoming: true,
          images: images,
        }, {
          id: '2',
          slug: 'example-event-2',
          title: 'Art Oost / Open Studios',
          startDate: moment().subtract(10, 'days').toDate(),
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          upcoming: false,
          images: images,
        }, {
          id: '3',
          slug: 'example-event-3',
          title: 'Separation, Alignment, Cohesion',
          startDate: moment("20111031", "YYYYMMDD").toDate(),
          endDate: moment("20120620", "YYYYMMDD").toDate(),
          artists: 'some artist, another artist',
          curator: 'some curator',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          upcoming: false,
          images: images,
        }];
    }
}
