import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acclaim',
  templateUrl: './acclaim.component.html',
  styleUrls: ['./acclaim.component.css']
})
export class AcclaimComponent implements OnInit {

  constructor() { }
  featuredReviews = [
    {
      "source": "Opera News",
      "review": "Commissioner Kenesaw “Mountain” Landis who’s portrayed by bass Christian Zaremba as a thundering Old testament figure in flowing judicial robes",
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
  otherReviews = [
    {
      "source": "Anne Midgette, The Washington Post",
      "review": "Stealing the evening, though, was Christian Zaremba as the dancing master, Passagallo.  Zaremba already stood out this summer, vocally and dramatically, as Collatinus, the husband in the stark, tragic “The Rape of Lucretia.” For “L’Opera Seria,” he donned bandana, sweats, leg warmers and a dancer’s floating gait, and, dragging nervously on a cigarette, fussed over every detail of the performance and came up with artistic “inspirations,”... Zaremba has the comedian’s gift of playing his role absolutely seriously, and he sings well to boot. I found myself wishing Wolf Trap would make Passagallo a recurring character, like Borat, appearing on the sidelines of every future opera performance with earnest suggestions and an occasional pirouette.",
      "date": "",
      "performance": "L’OPERA SERIA"
    },
    {
      "source": "Glen Roven, The Huffington Post",
      "review": "He sang magnificently and his youthful energy never strained the credibility of the scene.",
      "date": "",
      "performance": "DON GIOVANNI"
    },
    {
      "source": " Anthony Tommasini, The New York Times",
      "review": "Also winning was Christian Zaremba, a stage animal with a big bass voice, as Pistola.",
      "date": "",
      "performance": "FALSTAFF"
    },
  ]
  ngOnInit() {
  }

}
