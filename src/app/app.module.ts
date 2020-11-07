import { AuthentificationGuard } from './guards/authentification.guard';
import { RegisterComponent } from './components/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes : Routes = [

  {path : "" , component:HomeComponent , canActivate : [AuthentificationGuard]},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {path : "**" , component : NotFoundComponent}
]

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],

  providers: [AuthentificationGuard],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
