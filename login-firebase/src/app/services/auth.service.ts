import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private FireAuth:AngularFireAuth ) { }

  async login(email:string,password:string){
    try{
      return await this.FireAuth.signInWithEmailAndPassword(email,password);
    }
    catch(err){
      console.log("Error ", err);
      return null;
    }
  }
  async signup(email:string,password:string){
    try{
      return await this.FireAuth.createUserWithEmailAndPassword(email,password);
    }
    catch(err){
      console.log("Error sign up", err);
      return null;
    }
  }
  async loginGoogle(email:string,password:string){
    try{
      return await this.FireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(err){
      console.log("Error google ", err);
      return null;
    }
  }
}
