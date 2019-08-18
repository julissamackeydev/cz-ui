import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const elemDropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elemDropdown, {
      // coverTrigger: false
      // hover: true 
    });
  }

}
