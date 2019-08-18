import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() { }
  images=[
  'assets/bakkuten2.svg',
 'assets/bakketun1.svg',
 'assets/bakkuten3.svg',
 'assets/brandonpavan1.svg',
 'assets/brandonpavan2.svg',
 'assets/brandonpavan3.svg',
 'assets/brandonpavan4.svg',
//  'assets/coventgarden.svg',
 'assets/fanciullamno.svg',
 'assets/fanciullaomaha2.svg',
 'assets/fancuillaomaha1.svg',
 'assets/glimmerglass.svg',
 'assets/coryweaver.svg',
 'assets/hoebermann1.svg',
 'assets/hoebermann2.svg',
 'assets/hoebermann3.svg',
 'assets/hoebermann4.svg',
 'assets/magicflute1.svg',
 'assets/magicflute2.svg',
//  'assets/mussorgsky.svg',
//  'assets/operaseria.svg',
 'assets/pistola.svg',
 'assets/rapeoflucretia.svg',
 'assets/rapeoflucretia2.svg',
 'assets/rigolettostlouis1.svg',
 'assets/rigolettostlouis2.svg',
 'assets/soundbites1.svg',
 'assets/soundbites2.svg',
//  'assets/sparafucille-rigoletto.svg'
  //'assets/tosca.jpg',
  //'assets/ventureopera.JPG' 
  ]
  // albums = [
  //   {
  //     "_id": { "$oid": "j-d-l-rigoletto" },
  //     "links": [
  //       "assets/rigolettostlouis1.svg",
  //       "assets/rigolettostlouis2.svg"
  //     ],
  //     "description": "RIGOLETTO | OPERA THEATER ST LOUIS [ PHOTOS BY J DAVID LEVY ]"
  //   },
  //   {
  //     "_id": { "$oid": "brandonpavan" },
  //     "links": [
  //       'assets/brandonpavan1.svg',
  //       'assets/brandonpavan2.svg',
  //       'assets/brandonpavan3.svg',
  //       'assets/brandonpavan4.svg',
  //     ],
  //     "description": "PHOTOS BY BRANDON PAVAN"
  //   },
  //   {
  //     "_id": { "$oid": "portland-difficulty" },
  //     "links": [
  //       "assets/coryweaver.svg"
  //     ],
  //     "description": "DIFFICULTY OF CROSSING A FIELD | PORTLAND OPERA"
  //   },
  //   {
  //     "_id": { "$oid": "hoebermann" },
  //     "links": [
  //       'assets/hoebermann1.svg',
  //       'assets/hoebermann2.svg',
  //       'assets/hoebermann3.svg',
  //       'assets/hoebermann4.svg'
  //     ],
  //     "description": "PHOTOS BY KRISTEN HOEBERMANN"
  //   },
  //   {
  //     "_id": { "$oid": "elise-bakketun-pearl-fishers" },
  //     "links": [
  //       "assets/bakketun1.svg",
  //       "assets/bakkuten2.svg",
  //       "assets/bakkuten3.svg"
  //     ],
  //     "description": "PEARL FISHERS | LYRIC OPERA OF KANSAS CITY [ PHOTOS BY ELISE BAKKETUN ]"
  //   },
  //   {
  //     "_id": { "$oid": "dario-acosta-opera-news" },
  //     "links": [
  //       "assets/soundbites1.svg",
  //       "assets/soundbites2.svg"
  //     ],
  //     "description": "OPERA NEWS DEC 2018 | PHOTOS BY DARIO ACOSTA"
  //   },
  //   // {
  //   //   "_id": { "$oid": "tosca-metropolitan-opera" },
  //   //   "links": [
  //   //     "assets/screenshot.svg"
  //   //   ],
  //   //   "description": "TOSCA | METROPOLITAN OPERA"
  //   // },
  //   // {
  //   //   "_id": { "$oid": "don-giovanni-venture" },
  //   //   "links": ["assets/dongiovanniventure.svg"],
  //   //   "description": "DON GIOVANNI | VENTURE OPERA"
  //   // },
  //   {
  //     "_id": { "$oid": "pistola-prelude" },
  //     "links": ["assets/pistola.svg"],
  //     "description": "FALSTAFF | PRELUDE TO PERFORMANCE"
  //   }
  // ];
  ngOnInit() {
  }
}
