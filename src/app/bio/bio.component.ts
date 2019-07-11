import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  content =`The American/French bass Christian Zaremba is quickly garnering a reputation in the eyes of critics and directors alike, as a flexible and multifaceted artist comfortable portraying a wide range of characters; from lovers, to loafers, and to lords with a voice to match.  

 

  Praised by the New York Times as "a stage animal with a big bass voice" Christian returned in 2016 to Wolf Trap Opera singing Collatinus in The Rape of Lucretia and Passagallo in Gassman's L'Opera Seria.  In the 2016-17 season Christian returns to Opera Omaha to sing Colline in La Boheme and will make his Portland Opera debut in the same role.  Also in Portland, he will reprise his role as the Bass Soloist in Lang's The Little Matchgirl Passion and sing Andrew in The Difficulty of Crossing a Field.  
  
   
  
  The 2017-18 season sees Mr. Zaremba make his debut at the Metropolitan Opera on New Year's Eve as Angelotti in Tosca.  He will also make debuts with Austin Opera as Zuniga in Carmen and as Sparafucile in Rigoletto  with Michigan Opera Theater. 
  
  `
  ngOnInit() {
  }

}
