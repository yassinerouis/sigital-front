import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  server_link : string = "http://localhost:8080"
  username : string

  constructor(private httpClient : HttpClient) {}

   public saveToken(token) {
      localStorage.setItem("JwtToken", token)
      var decoded = jwt_decode(token); 
      this.username = decoded["sub"]
      localStorage.setItem("username",this.username)
    }

   public login(auth) : Observable<any> {
      return this.httpClient.post
      (this.server_link+"/login",auth,
      {
        headers: {'Content-Type': 'application/json'}, 
        observe : 'response'
      })
    }

    getUsername(){
      return  localStorage.getItem("username")
    }

    public logOut(){
      localStorage.removeItem("JwtToken")
      localStorage.removeItem("username")
    }
}
