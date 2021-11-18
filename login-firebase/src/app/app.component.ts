import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService){

  }
  title = 'login-firebase';
  user = {
    email : '',
    password:''
  }
  Login() {
    console.log(this.user)
    const {email,password} = this.user
    this.auth.login(email,password).then(res =>{
      console.log("Login",res)
    })
  }
  SignUp() {
    console.log(this.user)
    const {email,password} = this.user
    this.auth.signup(email,password).then(res =>{
      console.log("Sign up",res)
    })
  }
  LoginGoogle() {
    console.log(this.user)
    const {email,password} = this.user
    this.auth.loginGoogle(email,password).then(res =>{
      console.log("Sign up",res)
    })
  }
  
  getUserLogged () {
    this.auth.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    })
  }
}
