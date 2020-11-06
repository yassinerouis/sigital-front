import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : boolean = false
  userLoggedIn : string

  constructor(private loginService : LoginService , private router : Router) {}

  ngOnInit() {
    if(this.loginService.getUsername()){
      this.userLoggedIn=this.loginService.getUsername()
      this.isLoggedIn=true
    }
  }

  logout(){
    this.loginService.logOut()
    this.isLoggedIn=false
    this.userLoggedIn=null
    this.router.navigate(['/login'])
  }
  
}
