import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeviciosProvider } from '../../providers/sevicios/sevicios';
import { ListPage } from '../../pages/list/list';
/**
 * Generated class for the DetalleListaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-lista',
  templateUrl: 'detalle-lista.html',
})
export class DetalleListaPage {
titulo;
aviso;
categoria;
fshInicio;
fshFin;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public servicios:SeviciosProvider)
  {
          this.servicios.detalleLista()
          .then(
            data=>{
              console.log(data);
              this.titulo=data["Titulo"];
              this.aviso=data["aviso"];
              this.categoria=data["Categoria"];
              this.fshInicio=data["fechaInicio"];
              this.fshFin=data["fechaTermino"];
            }
          )
          .catch(
            error=>{
              console.log(error);
            }
          )
          }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleListaPage');
  }
volver(){
  this.navCtrl.push(ListPage);
}
}
