import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeviciosProvider } from '../../providers/sevicios/sevicios';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EditListaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-lista',
  templateUrl: 'edit-lista.html',
})
export class EditListaPage {
selectPrimero;
idSelectPrimero;
catTotal;
Titulo;
aviso;
fechaInicio;
fechaI;
Activo;
selectCat;
inicio;
semanas;
Act;
txt;
Precio;
//myDate: String = new Date('10/30/2017').toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams  , 
    public servicios:SeviciosProvider,public alertCtrl: AlertController)
   {
          this.servicios.editarLista()
        .then(
          data=>{
            console.log(data);
             this.selectPrimero=data["Categoria"];
             this.idSelectPrimero=data["idCategoria"];
             this.Titulo=data["Titulo"];
             this.aviso=data["aviso"];
             this.fechaInicio=data["fechaInicio"];
             this.semanas=data["canSemana"];
             this.llamarCat();
             this.selectCat= this.idSelectPrimero;
             this.inicio=this.fechaInicio;
             this.Activo=data["activo"];
             this.llamarFechas();
          }
        )
        .catch(
          error=>{
            console.log(error);
          }
        )
        } 

llamarCat(){
          this.servicios.llamarCat(this.idSelectPrimero)
        .then(
          data=>{
            console.log(data);
            this.catTotal=data;
          }
        )
        .catch(
          error=>{
            console.log(error);
          }
        )
}
llamarFechas(){
  this.servicios.consultaFechasDis()
  .then(
    data=>{
      console.log(data);
      this.fechaI=data;
    }
  )
  .catch(
    error=>{
      console.log(error);
    }
  )
}
      CalcularPrecio(){
        var caracteres=this.aviso.length;
        var calculo=caracteres*20*this.semanas;
        this.Precio=calculo;
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditListaPage');
  }

  enviarEdicion(){
    if (this.selectCat==""){
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No selleciono una categoría",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.Titulo=="") {
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No agregó un Titulo",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.aviso==""){
      let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro un Aviso",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.semanas==""){
            let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro un número de semana",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.inicio==""){
            let alert = this.alertCtrl.create(
                      {
                        title:"Aviso",
                        subTitle: "No Registro una Fecha",
                        buttons: ["OK"]
                      }
        );
           alert.present();
    }else if(this.Precio==null){
      let alert = this.alertCtrl.create(
                {
                  title:"Aviso",
                  subTitle: "Precione el botón calcular para continuar",
                  buttons: ["OK"]
                }
  );
     alert.present();
}else{
    this.servicios.editarAviso(this.selectCat, this.Titulo, this.aviso,this.semanas,
      this.inicio, this.Activo, this.Precio)
       .then(
    data=>{
      //console.log(data);
      if (data["Ok"]=="1"){

        //ir a lista
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
