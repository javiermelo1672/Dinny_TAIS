import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { Userdb } from "../../models/userdb";
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
      user ={} as User;
      userdb={}as Userdb;
      public usersCustomerId: string;

  constructor(private alertCtrl: AlertController,private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user:User)
  {
    try{
         const result=await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
         console.log(result);

         

         let alert = this.alertCtrl.create({
          title: 'EXITO',
          subTitle: 'Su usuario ha sido creado Correctamente',
          buttons: ['Aceptar']

          
        });
        alert.present();
    }
    catch(e)
    {
      let alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'Su Usuario no ha sido creado',
        buttons: ['Aceptar']
      });
      alert.present();
      console.error(e);
    }
         
  }


}
