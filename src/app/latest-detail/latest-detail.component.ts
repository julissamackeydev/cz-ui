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
    "_id": { "$oid": "5cd897f9d46c231f62354987" },
    "description": "CHRISTIAN WILL JOIN THE CAST OF AGRIPPINA AT THE ROYAL OPERA HOUSE IN LONDON",
    "date": "JUL 11 2019",
    "content": "Christian has recently been invited to the Royal Opera House in London to join the cast of Agrippina, which includes Joyce DiDonato, Franco Fagioli, and Ierstyn Davies.   Maxim Emelyanychev conducts.",
    "image": ""
    },
    {
    "_id": { "$oid": "5cd897f9d46c231f62354987" },
    "description": "AS A HIRED ASSASSIN...",
    "date": "JUL 11 2019",
    "content": "In review of Opera Theater of St. Louis’ Rigoletto, Broadway World notes, “Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.  Read the full review here: https://www.broadwayworld.com/bwwopera/article/BWW-Review-A-Glorious-RIGOLETTO-Opens-at-Opera-Theatre-St-Louis-20190604",
    "image": ""
    },
    {
    "_id": { "$oid": "5cd897f9d46c231f62354987" },
    "description": "SONGS & DANCES OF DEATH",
    "date": "JUL 11 2019",
    "content": "Christian will sing Modest Mussorgski’s famous song cycle for bass, Songs and Dances of Death, with the Greenwich Symphony in late November 2019.  Please check later for scheduling updates.",
    "image": ""
    }
  ];

  ngOnInit() {
  }

}
