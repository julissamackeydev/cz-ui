import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-detail',
  templateUrl: './latest-detail.component.html',
  styleUrls: ['./latest-detail.component.css']
})
export class LatestDetailComponent implements OnInit {

  constructor() { }
  clips = [
    {
    "_id": { "$oid": "roya-opera" },
    "description": "AGRIPPINA AT ROYAL OPERA",
    "date": "JUL 11 2019",
    "content": "Christian has recently been invited to the Royal Opera House in London to join the cast of Agrippina, which includes Joyce DiDonato, Franco Fagioli, and Ierstyn Davies.   Maxim Emelyanychev conducts.",
    "image": "assets/coventgarden.svg",
    },
    {
    "_id": { "$oid": "st-louis" },
    "description": "AS A HIRED ASSASSIN...",
    "date": "JUL 11 2019",
    "content": "In review of Opera Theater of St. Louis’ Rigoletto, Broadway World notes, “Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.  Read the full review here: ",
    "link" : "https://www.broadwayworld.com/bwwopera/article/BWW-Review-A-Glorious-RIGOLETTO-Opens-at-Opera-Theatre-St-Louis-20190604",
    "image": "assets/sparafucille-rigoletto.svg"
    },
    {
    "_id": { "$oid": "mussorgsky" },
    "description": "SONGS & DANCES OF DEATH",
    "date": "SEPT 3 2019",
    "source": "BROADWAY WORLD",
    "content": "On Sunday, November 24, 2019 at 3:00pm at All Saints Church, GVO (The Greenwich Village Orchestra) joins forces withMetropolitan Opera bass Christian Zaremba in Defying Death, a program featuringMussorgsky's Songs and Dances of Death, orchestrated by Shostakovich. Rounding out the program, the GVO brings to life Rimsky-Korsakov's rich musical tapestry Scheherazade andProkofiev's evocative ballet music from The Love for Three Oranges.",
    "image": "assets/mussorgsky.svg"
    }
  ];
  currentPiece: any;
  ngOnInit() {
    const requestedNews = window.location.href;
  
    this.clips.forEach((clip)=>{
      const clipExists = requestedNews.includes(clip._id.$oid) ? clip : false;
      clipExists === false ? '' :  this.currentPiece = clipExists;
  
    });

    console.log(this.currentPiece)
  }

}
