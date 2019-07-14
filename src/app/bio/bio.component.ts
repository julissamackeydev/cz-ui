import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  content =[`Whether “stealing the evening. . . as the dancing master” (The Washington Post) or “chilling in espousing the theories of Negro management” (Opera News), French-American bass, Christian Zaremba, is intent on leaving a strong impression each time he performs.
  Last season, Mr. Zaremba was seen as Angelotti in Tosca at the Metropolitan Opera, Sparafucile in Rigoletto with Michigan Opera Theater, Zuniga in Carmen with Austin Opera, and the bass soloist in Verdi’s Requiem with The Greenwich Symphony.  Recent highlights include Il Re in Aïda with the National Symphony, Collatinus in The Rape of Lucretia, Passagallo in L’Opera Seria, and Dr. Bartolo in Le nozze di Figaro with Wolf Trap Opera, Colline in La bohème with Portland Opera and Opera Omaha, Sarastro in Die Zauberflöte and Ashby in La fanciulla del West with Minnesota Opera, and the Bass Soloist in The Little Match Girl Passion with the Glimmerglass Festival and Portland Opera.`,
   
  `In the 2018-2019 season, Mr. Zaremba returns to The Metropolitan for productions of Gianni Schicchi and Tosca before greeting the New Year with a return to Austin Opera as the French General in Silent Night and to Minnesota Opera as Mountain Landis in the world premier of The Fix by Joel Puckett.  He then makes debuts with The Lyric Opera of Kansas City as Nouribad in Les pêcheurs des perles and reprises his Sparafucile in Rigoletto with Opera Theatre of St. Louis.`,
  
  `Future seasons will see him join the cast of Agrippina at the Royal Opera House in London, as Colline in La bohème with Lyric Opera of Kansas City, Lesbo in Agrippina with the Metropolitan Opera, Sparafucile in Rigoletto with Nashville Opera, Sarastro in Die Zauberflöte with Opéra de Montreal, and in a much-anticipated titular role debut with Austin Opera.`]
  ngOnInit() {
  }

}
