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
  bio = `The American/French bass Christian Zaremba is quickly garnering a reputation in the eyes of critics and directors alike, as a flexible and multifaceted artist comfortable portraying a wide range of characters; from lovers, to loafers, and to lords with a voice to match.  

 

  Praised by the New York Times as "a stage animal with a big bass voice" Christian returned in 2016 to Wolf Trap Opera singing Collatinus in The Rape of Lucretia and Passagallo in Gassman's L'Opera Seria.  In the 2016-17 season Christian returns to Opera Omaha to sing Colline in La Boheme and will make his Portland Opera debut in the same role.  Also in Portland, he will reprise his role as the Bass Soloist in Lang's The Little Matchgirl Passion and sing Andrew in The Difficulty of Crossing a Field.  
  
   
  
  The 2017-18 season sees Mr. Zaremba make his debut at the Metropolitan Opera on New Year's Eve as Angelotti in Tosca.  He will also make debuts with Austin Opera as Zuniga in Carmen and as Sparafucile in Rigoletto  with Michigan Opera Theater. 
  
  `
  ngOnInit() {
  }

}
