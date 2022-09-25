import { Component, OnInit } from '@angular/core';
import { HardcodedAuthonticationService } from 'src/app/service/hardcoded-authontication/hardcoded-authontication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public hardCodedAuthenticationService: HardcodedAuthonticationService) { }

  ngOnInit(): void {
  }

}
