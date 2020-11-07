import { User } from './../../interfaces/user';
import { RegisterService } from './../../services/register-service/register.service';
import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : User = {
    firstName:"",
    lastName:"",
    username:"",
    password:""
  }

  constructor(private loginService : LoginService , private registerService : RegisterService) { }

  ngOnInit() {
    this.user.username = this.loginService.getUsername()
    this.registerService.getUser(this.user.username).subscribe(user=>{
      this.user = (user as User)
    })
  }

}
