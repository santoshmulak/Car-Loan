import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthonticationService {
  name: string;
  constructor() { }

  authenticatere(username, password) {
    this.name = username + ' in ';
    
    
    if (username === 'RE' && password === 'RE') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }


    return false;
  }


  authenticateoe(username, password) {
  
    if (username === 'OE' && password === 'OE') {
      sessionStorage.setItem('authenticaterUser', username);

      return true;

    }
    return false;
  }
  authenticatecm(username, password) {
  
    if (username === 'CM' && password === 'CM') {
      sessionStorage.setItem('authenticaterUser', username);

      return true;

    }
    return false;
  }


  authenticateadmin(username, password) {
    this.name = username + ' in ';


    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('authenticaterUser', username);

      return true;

    }
    return false;
  }

  authenticatedb(username, password) {
 
    if (username === 'DB' && password === 'DB') {
      sessionStorage.setItem('authenticaterUser', username);

      return true;

    }
    return false;
  }


  authenticateld(username, password) {
    this.name = username + ' in ';

    if (username === 'LD' && password === 'LD') {
      sessionStorage.setItem('authenticaterUser', username);

      return true;

    }
    return false;
  }







  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }
}
