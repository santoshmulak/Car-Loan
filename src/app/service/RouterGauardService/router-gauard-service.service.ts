import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthonticationService } from '../hardcoded-authontication/hardcoded-authontication.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGauardServiceService implements CanActivate{

  constructor(private hardcodedService:HardcodedAuthonticationService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
   

    if(this.hardcodedService.isUserLoggedIn())
    {
      return true;
     
    }
    this.router.navigate(['login']);
    return false;
  }
}
