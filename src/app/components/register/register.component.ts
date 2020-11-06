import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../../services/login-service/login.service';
import { User } from './../../interfaces/user';
import { Router } from '@angular/router';
import { RegisterService } from './../../services/register-service/register.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = {
    firstName:"",
    lastName:"",
    username:"",
    password:""
  }

  form = new FormGroup(
    {
      firstname:new FormControl('',[Validators.required,Validators.pattern("[A-Za-z ]+")]),
      lastname:new FormControl('',[Validators.required,Validators.pattern("[A-Za-z ]+")]),
      username:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    }
  )

  constructor(private registerService:RegisterService,private loginService:LoginService,private router:Router) { }

  ngOnInit(){}
  
  register(){
    this.registerService.saveUser(this.user).subscribe(()=>{
      this.loginService.login({username:this.user.username,password:this.user.password}).subscribe(response=>{
        const token=response.headers.get('Authorization')
        this.loginService.saveToken(token); 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenue',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/'])
      })
    })
  }
}