import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
const firebaseConfig = {

  apiKey: "AIzaSyCmWXb8pmu1jn_CtPDbFtXPdfZCaHoIoZ8",
  authDomain: "pruebasfirebase-cd816.firebaseapp.com",
  databaseURL: "https://pruebasfirebase-cd816-default-rtdb.firebaseio.com",
  projectId: "pruebasfirebase-cd816",
  storageBucket: "pruebasfirebase-cd816.appspot.com",
  messagingSenderId: "557327031488",
  appId: "1:557327031488:web:30be1cf65999f2ff722125",
  measurementId: "G-YQ3JC0L14C"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
