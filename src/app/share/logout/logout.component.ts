import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HardcodedAuthonticationService } from 'src/app/service/hardcoded-authontication/hardcoded-authontication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthService:HardcodedAuthonticationService,private router:Router) { }

  ngOnInit(): void {
    this.hardcodedAuthService.logout()

    this.router.navigate(['home'])








  }

}
