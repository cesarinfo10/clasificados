import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
import { SeviciosProvider } from '../../providers/sevicios/sevicios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nomUsuario;
  fotoUsuario;
listaPage=ListPage;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public servicios:SeviciosProvider) {
        this.servicios.consultUsuario()
  .then(
    data=>{
      console.log(data);
      this.nomUsuario=data["Usuario"];
      if (data["Foto"]!=null){
      this.fotoUsuario=data["Foto"];
      }else{
        this.fotoUsuario="sinFoto.jpg"
      }
      this.servicios.seIdUserVar(data["idUsuario"]);
    }
  )
  .catch(
    error=>{
      console.log(error);
    }
  )
  }
}
