import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

    
  }

  ionViewDidLoad() {
   this.afAuth.authState.subscribe(data=>console.log(data));
   
  }

}
