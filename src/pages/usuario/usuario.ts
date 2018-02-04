import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRegistroUserPage } from '../../pages/add-registro-user/add-registro-user';
import { SeviciosProvider } from '../../providers/sevicios/sevicios';
import { HomePage } from '../../pages/home/home';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the UsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  usuario;
  pass;
addingPage=AddRegistroUserPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public servicios:SeviciosProvider,public alertCtrl: AlertController) {
    this.usuario="";
    this.pass="";
 /* this.servicios.getAll()
  .then(
    data=>{
      //console.log(data);
      if (data["Ok"]=="1"){
        console.log("holasss")
      }
    }
  )
  .catch(
    error=>{
      console.log(error);
    }
  )*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }
  
enviar(){
    this.servicios.getAll(this.usuario, this.pass)
       .then(
    data=>{
      //console.log(data);
      //SI ES CORRECTO
      if (data =="1"){
       this.navCtrl.push(HomePage);
        //console.log("holasss")
        //SI NO LO ES CORRECTA LA SESIÓN
      }else{
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "Usuario o contraseña Invalidos",
                        buttons: ["OK"]
                      }
        );
           alert.present();
      }
    }
  )
  .catch(
    error=>{
      console.log(error);
    }
  )     
}
}
