import { LoginService } from './../login-service/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  server_link : string = "http://localhost:8080"

  constructor(private httpClient : HttpClient) {}

  saveUser(user){
    return this.httpClient.post
      (this.server_link+"/users/save", user ,
        {
          headers: {'Content-Type': 'application/json'}, 
          observe : 'response'
         })
   }

  getUser(username){
    return this.httpClient.get
      (this.server_link+"/users/get/"+username ,
      {headers : new HttpHeaders({'authorization':localStorage.getItem("JwtToken"), 'Content-Type':'application/json'})}
      )
    }
}
