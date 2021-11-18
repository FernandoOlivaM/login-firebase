import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-firebase';
  user = {
    email : '',
    password:''
  }
  Login() {
    console.log(this.user)
  }
}
