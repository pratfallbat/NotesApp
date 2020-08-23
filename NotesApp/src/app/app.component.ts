import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NotesApp';
  loadedFeature = 'recipe';
  

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyCH1wK8AJY_pxOt_coVASu8xlQbuFyTl9c",
      authDomain: "recipecustom.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

 