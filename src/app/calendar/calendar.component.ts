import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  constructor() { }
  upcoming = [{
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
        "date": "DEC 23 - MAR 7 2020",
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
  ]
  ngOnInit() {

  }

}