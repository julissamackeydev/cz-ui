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
    "content": ["Christian has recently been invited to the Royal Opera House in London to join the cast of Agrippina, which includes Joyce DiDonato, Franco Fagioli, and Ierstyn Davies. Maxim Emelyanychev conducts."],
    "image": "assets/coventgarden.svg",
    },
    {
    "_id": { "$oid": "st-louis" },
    "description": "AS A HIRED ASSASSIN...",
    "date": "JUL 11 2019",
    "content": ["In review of Opera Theater of St. Louis’ Rigoletto, Broadway World notes, “Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.  Read the full review here: "],
    "link" : "https://www.broadwayworld.com/bwwopera/article/BWW-Review-A-Glorious-RIGOLETTO-Opens-at-Opera-Theatre-St-Louis-20190604",
    "image": "assets/sparafucille-rigoletto.svg"
    },
    {
    "_id": { "$oid": "mussorgsky" },
    "description": "SONGS & DANCES OF DEATH",
    "date": "SEPT 3 2019",
    "source": "BROADWAY WORLD",
    "content": ["On Sunday, November 24, 2019 at 3:00pm at All Saints Church, GVO (The Greenwich Village Orchestra) joins forces with Metropolitan Opera bass Christian Zaremba in Defying Death, a program featuring Mussorgsky's Songs and Dances of Death, orchestrated by Shostakovich. Rounding out the program, the GVO brings to life Rimsky-Korsakov's rich musical tapestry Scheherazade and Prokofiev's evocative ballet music from The Love for Three Oranges."],
    "image": "assets/mussorgsky.svg"
    },
    {
    "_id": { "$oid": "opera-news" },
    "description": "OPERA NEWS: SOUND BITES",
    "date": "DEC 2018",
    "source": "Opera News",
    "content": ["CHRISTIAN ZAREMBA  will make his Met debut on December 31 as Angelotti in Tosca, but it won’t be his first appearance on the Met stage. That happened in 2009.",
    "Zaremba, who studied theater and sociology at NYU and in Berlin, had no ambition to be an opera singer when he answered a casting ad for actors who could play percussion and do stage combat in an upcoming Met production. “They wanted actors who wouldn’t mind being shirtless onstage, as well. I’d done martial arts my entire life, and I had studied music, so I thought, ‘Why not try it?’ Fortune was with me, and I got cast in the premiere of David McVicar’s Trovatore at the Met. It was a fantastic show, with great, great singers. But opera wasn’t my thing then. I just thought, ‘I can use my talent for jumping all over the place and get some money for it!’” Zaremba, who worked steadily at the Met as a supernumerary and actor, dates his change in ambition to his stint as fight captain in Stephen Wadsworth’s staging of Boris Godunov, which he calls “a cathartic experience. Mussorgsky’s music really spoke to me, very directly and deeply. Then, a few weeks later, I was working in Il Trovatore again, and we were waiting backstage to go on for ‘Di quella pira.’ And I heard the amazing duet and said to myself, ‘I want to do this. I’m going to be an opera singer.’ Talk about the height of arrogance! I had no training—I just wanted to do it!”",
    "In 2011, Zaremba had his first voice lesson with Peter Volpe, who was then singing Idraote in Armida at the Met. “He put me through vocalizing in his dressing room—and Renée Fleming had the dressing room down the hall. My god!” Determined to overcome his late start, Zaremba began studying seriously with Volpe, who remains his teacher. “I approached singing as an athlete would—I ate for it, I slept for it. I lived for opera, nothing else. I knew I could outwork everyone else. And I had to. I had no time for excuses.”", 
    "Within a few years, Zaremba made debuts with Prelude to Performance, the Glimmerglass Festival, Minnesota Opera, Wolf Trap Opera, Opera Omaha and Portland Opera; earlier this season, he bowed at Michigan Opera Theatre and Austin Opera. “I have been lucky—so many people have taken a chance on me. All I want to do is repay their faith in me.”"],
    "image": "assets/soundbites1.svg"
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
