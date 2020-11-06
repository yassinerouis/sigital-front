import { LoginService } from './../services/login-service/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor(private login : LoginService , private route : Router){}

  canActivate(): boolean {

    if(this.login.getUsername()){
      return true;
    }
    else{
      this.route.navigate(['/login'])
      return false;
    }
    
  }

}
