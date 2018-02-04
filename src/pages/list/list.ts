import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SeviciosProvider } from '../../providers/sevicios/sevicios';
import { DetalleListaPage } from '../../pages/detalle-lista/detalle-lista';
import { EditListaPage } from '../../pages/edit-lista/edit-lista';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  TituloCla;
  constructor(public navCtrl: NavController, public navParams: NavParams
  , public servicios:SeviciosProvider)
   {
          this.servicios.consultaLista()
        .then(
          data=>{
            console.log(data);
            this.TituloCla=data;
          }
        )
        .catch(
          error=>{
            console.log(error);
          }
        )
        }
verAviso(id){
  this.servicios.setIdListaVar(id);
  this.navCtrl.push(DetalleListaPage);
}
EditarLista(id)
{
  this.servicios.setIdListaVar(id);
  this.navCtrl.push(EditListaPage);
}
  }

