import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth } from "angularfire2/auth";
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user ={} as User;
  constructor(private loadingCtrl: LoadingController,private alertCtrl: AlertController,private afAuth:AngularFireAuth, public navCtrl: NavController) {

  }

  async login(user:User)
  {

   
      let loader = this.loadingCtrl.create({
        content: "Accediendo"
      });
      loader.present();
    try{
    const result=this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);

    if(result)
    {
      console.log(result);
      let alert = this.alertCtrl.create({
        title: 'EXITO',
        subTitle: 'Credenciales Correctas',
        buttons: ['Aceptar']
      });
      alert.present();
      this.navCtrl.setRoot('InicioPage');
      loader.dismiss();
    }
    
    
  }
    catch(e){
      this.navCtrl.setRoot('HomePage');
console.error(e);
let alert = this.alertCtrl.create({
  title: 'ERROR',
  subTitle: 'Credenciales Incorrectas',
  buttons: ['Aceptar']
  
});
   alert.present();
   loader.dismiss();
    }
  }
  register()
  {
    this.navCtrl.setRoot('RegistroPage');
  }

}
