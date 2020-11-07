import { NavbarComponent } from './../navbar/navbar.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth = {username : "" , password : ""}

  form = new FormGroup(
    {
      username : new FormControl('' , Validators.required),
      password : new FormControl('' , [Validators.required])
    }
  )
  constructor(private loginService : LoginService , private router : Router) { }
  
  ngOnInit() { }

  login(){
    this.loginService.login(this.auth).subscribe(response => {
      const token = response.headers.get('Authorization')
      this.loginService.saveToken(token); 

      Swal.fire({
        position: 'center-end',
        icon: 'success',
        title: 'Bienvenue',
        showConfirmButton: false,
        timer: 1500
      })

      this.router.navigate(['/'])
      }
      , ()=>{

        Swal.fire({
          title: 'Erreur de connexion !',
          text: 'Veuillez vérifier vos informations de connexion',
          icon: 'error',
          confirmButtonText: 'OK'
        })

      })
    }

}
