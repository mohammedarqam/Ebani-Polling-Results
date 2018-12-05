import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController, 
  ) {
    this.getResponses();
  }

  getResponses(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    firebase.database().ref("Responses").once("value",itemSnap=>{
      itemSnap.forEach(snap=>{
        console.log(snap.val());
      })
      loading.dismiss();
    })

  }
}
