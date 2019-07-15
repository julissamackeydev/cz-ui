import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  location = `ROYAL OPERA HOUSE, UK`;
  opera = `AGRIPPINA`;
  startDate = `AUGUST 19`;
  endDate = ` OCTOBER 12`;
  tickets = `https://www.roh.org.uk/`;
  upcoming = [
    {
        "_id": {
            "$oid": "5cd8a219d38f5a51aeb17aa3"
        },
        "date": "AUG 19 - OCT 12 2019",
        "location": "ROYAL OPERA HOUSE",
        "city": "LONDON",
        "event": "AGRIPPINA",
        "tickets": "https://www.roh.org.uk/"
    },
    {
        "_id": {
            "$oid": "5cd8a219d38f5a51aeb17aa3"
        },
        "date": "OCT 19 - NOV 17 2019",
        "location": "LYRIC OPERA",
        "city": "KANSAS CITY",
        "event": "LA BOHEME",
        "tickets": "https://kcopera.org/"
    },
    {
        "_id": {
            "$oid": "5cd8a219d38f5a51aeb17aa3"
        },
        "date": "DEC 23 2019 - MAR 7 2020",
        "location": "METROPOLITAN OPERA",
        "city": "NEW YORK CITY",
        "event": "AGRIPPINA",
        "tickets": "https://www.metopera.org/"
    },
    {
        "_id": {
            "$oid": "5cd8a219d38f5a51aeb17aa3"
        },
        "date": "MAR 28 - APR 11 2020",
        "location": "NASHVILLE OPERA",
        "city": "NASHVILLE",
        "event": "RIGOLETTO",
        "tickets": "http://www.nashvilleopera.org/"
    },
    {
        "_id": {
            "$oid": "5cd8a219d38f5a51aeb17aa3"
        },
        "date": "APR 19 - MAY 30 2020",
        "location": "L'OPERA DE MONTREAL",
        "city": "MONTREAL",
        "event": "DIE ZAUBERFLÖTE",
        "tickets": "https://www.operademontreal.com/en"
    }
  ];
  bioContent =[`Whether “stealing the evening. . . as the dancing master” (The Washington Post) or “chilling in espousing the theories of Negro management” (Opera News), French-American bass, Christian Zaremba, is intent on leaving a strong impression each time he performs.
  Last season, Mr. Zaremba was seen as Angelotti in Tosca at the Metropolitan Opera, Sparafucile in Rigoletto with Michigan Opera Theater, Zuniga in Carmen with Austin Opera, and the bass soloist in Verdi’s Requiem with The Greenwich Symphony.  Recent highlights include Il Re in Aïda with the National Symphony, Collatinus in The Rape of Lucretia, Passagallo in L’Opera Seria, and Dr. Bartolo in Le nozze di Figaro with Wolf Trap Opera, Colline in La bohème with Portland Opera and Opera Omaha, Sarastro in Die Zauberflöte and Ashby in La fanciulla del West with Minnesota Opera, and the Bass Soloist in The Little Match Girl Passion with the Glimmerglass Festival and Portland Opera.`,
   
  `In the 2018-2019 season, Mr. Zaremba returns to The Metropolitan for productions of Gianni Schicchi and Tosca before greeting the New Year with a return to Austin Opera as the French General in Silent Night and to Minnesota Opera as Mountain Landis in the world premier of The Fix by Joel Puckett.  He then makes debuts with The Lyric Opera of Kansas City as Nouribad in Les pêcheurs des perles and reprises his Sparafucile in Rigoletto with Opera Theatre of St. Louis.`,
  
  `Future seasons will see him join the cast of Agrippina at the Royal Opera House in London, as Colline in La bohème with Lyric Opera of Kansas City, Lesbo in Agrippina with the Metropolitan Opera, Sparafucile in Rigoletto with Nashville Opera, Sarastro in Die Zauberflöte with Opéra de Montreal, and in a much-anticipated titular role debut with Austin Opera.`];
  newsClips = [
    {
    "_id": { "$oid": "roya-opera" },
    "description": "AGRIPPINA AT ROYAL OPERA",
    "date": "JUL 11 2019",
    "content": "Christian has recently been invited to the Royal Opera House in London to join the cast of Agrippina, which includes Joyce DiDonato, Franco Fagioli, and Ierstyn Davies.   Maxim Emelyanychev conducts.",
    "image": "convent-garden",
    },
    {
    "_id": { "$oid": "st-louis" },
    "description": "AS A HIRED ASSASSIN...",
    "date": "JUL 11 2019",
    "content": "In review of Opera Theater of St. Louis’ Rigoletto, Broadway World notes, “Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.  Read the full review here: ",
    "link" : "https://www.broadwayworld.com/bwwopera/article/BWW-Review-A-Glorious-RIGOLETTO-Opens-at-Opera-Theatre-St-Louis-20190604",
    "image": "sparafucille-rigoletto"
    },
    {
    "_id": { "$oid": "mussorgsky" },
    "description": "SONGS & DANCES OF DEATH",
    "date": "JUL 11 2019",
    "content": "Christian will sing Modest Mussorgski’s famous song cycle for bass, Songs and Dances of Death, with the Greenwich Symphony in late November 2019.  Please check later for scheduling updates.",
    "image": "mussorgsky"
    }
  ];
  featuredReviews = [
    {
      "source": "Opera News",
      "review": "Commissioner Kenesaw “Mountain” Landis who’s portrayed by bass Christian Zaremba as a thundering Old testament figure in flowing judicial robes.",
      "date": "",
      "performance": "THE FIX"
    },
    {
      "source": "Broadway World",
      "review": "Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.",
      "date": "",
      "performance": "RIGOLETTO"
    }
  ]
  ngOnInit() {
  }

}
