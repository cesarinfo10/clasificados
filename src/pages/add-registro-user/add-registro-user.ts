import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeviciosProvider } from '../../providers/sevicios/sevicios';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AddRegistroUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-registro-user',
  templateUrl: 'add-registro-user.html',
})
export class AddRegistroUserPage {
  nombre;
  apellido;
  correo;
  movil;
  usuario;
  pass;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public servicios:SeviciosProvider,public alertCtrl: AlertController) {
      this.nombre="";
      this.apellido=""; 
      this.correo="";
      this.movil="";
      this.usuario="";
      this.pass="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRegistroUserPage');
  }

  limpiar(){
      this.nombre="";
      this.apellido="";  
      this.correo="";
      this.movil="";
      this.usuario="";
      this.pass="";
  }
  addUser(){
    if (this.nombre==""){
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro un Nombre",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.apellido=="") {
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro un Apellido",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.correo==""){
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro un Correo",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.movil==""){
            let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro un Teléfono o Móvil",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.usuario==""){
            let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro un Usuario",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.pass==""){
            let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro una Contraseña",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else{
    this.servicios.add(this.nombre, this.apellido, this.correo,this.movil,this.usuario, this.pass)
       .then(
    data=>{
      //console.log(data);
      if (data=="1"){
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "El usuario se inserto Correctamente",
                        buttons: ["OK"]
                      }
        );
           alert.present();
           this.limpiar();
      }else{
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "Error al Insertar",
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

}
