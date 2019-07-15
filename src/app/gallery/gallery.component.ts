import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  albums = [
    {
      "_id": { "$oid": "j-d-l-rigoletto" },
      "links": ["src/assets/j-david-levy-rigoletto-st-louis/20190526_3324.jpg",
        "src/assets/j-david-levy-rigoletto-st-louis/20190530_1458.jpg"],
      "description": "RIGOLETTO | OPERA THEATER ST LOUIS [ PHOTOS BY J DAVID LEVY ]"
    },
    {
      "_id": { "$oid": "pavan" },
      "links": [
        'src/assets/pavan/Christian_Z-2.jpg',
        'src/assets/pavan/Christian_Z-3.jpg',
        'src/assets/pavan/Christian_Z-5.jpg',
        'src/assets/pavan/Christian_Z-31.jpg',
      ],
      "description": "PHOTOS BY BRANDON PAVAN"
    },
    {
      "_id": { "$oid": "portland-difficulty" },
      "links": ["src/assets/portland-cory-weaver-difficulty-of-crossing-a-field/andrew.jpg"],
      "description": "DIFFICULTY OF CROSSING A FIELD | PORTLAND OPERA"
    },
    {
      "_id": { "$oid": "hoebermann" },
      "links": [
        'src/assets/hoebermann/0195 Christian Zaremba LO RES.jpg',
        'src/assets/hoebermann/0206 Christian Zaremba drama.jpg',
        'src/assets/hoebermann/0220 Christian Zaremba lighter.jpg',
        'src/assets/hoebermann/1943 Christian Zaremba LO RES.jpg'
      ],
      "description": "PHOTOS BY KRISTEN HOEBERMANN"
    },
    {
      "_id": { "$oid": "elise-bakketun-pearl-fishers" },
      "links": ["src/assets/elise-bakketun-pearl-fishers/thumbnail-3.jpg",
        "src/assets/elise-bakketun-pearl-fishers/thumbnail-4.jpg",
        "src/assets/elise-bakketun-pearl-fishers/thumbnail-5.jpg"
      ],
      "description": "PEARL FISHERS | LYRIC OPERA OF KANSAS CITY [ PHOTOS BY ELISE BAKKETUN ]"
    },
    {
      "_id": { "$oid": "dario-acosta-opera-news" },
      "links": ["src/assets/dario-acosta-opera-news/SoundBitesChristianZarembahdl1217.jpg",
        "src/assets/dario-acosta-opera-news/SoundBitesZarembalg1217.jpg"
      ],
      "description": "OPERA NEWS DEC 2018 | PHOTOS BY DARIO ACOSTA"
    },
    {
      "_id": { "$oid": "tosca-metropolitan-opera" },
      "links": ["src/assets/tosca-metropolitan-opera/32104763_10156738114363690_3854604604083798016_n.jpg",
        "src/assets/tosca-metropolitan-opera/Screen Shot 2018-09-25 at 9.43.25 AM.jpg",
        'src/assets/tosca-metropolitan-opera/Tosca Bow.jpg'
      ],
      "description": "TOSCA | METROPOLITAN OPERA"
    },
    {
      "_id": { "$oid": "don-giovanni-venture" },
      "links": ["src/assets/don-giovanni-venture/don-giovanni-venture.JPG"],
      "description": "DON GIOVANNI | VENTURE OPERA"
    },
    {
      "_id": { "$oid": "pistola-prelude" },
      "links": ["src/assets/falstaff-prelude/pistola-prelude.jpg"],
      "description": "FALSTAFF | PRELUDE TO PERFORMANCE"
    }
  ];
  ngOnInit() {
  }

}
