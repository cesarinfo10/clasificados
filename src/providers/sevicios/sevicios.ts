import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SeviciosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SeviciosProvider {
usuario;
pass;
idUsuario;
movil="1";
//Lista
idClasificado;

  constructor(public http: Http) {
    console.log('Hello SeviciosProvider Provider');
	}
	  setUsuarioVar(value) {
    this.usuario = value;
  }
	  setPassVar(value) {
    this.pass = value;
  }
	  seIdUserVar(value) {
    this.idUsuario = value;
  }

  	  setIdListaVar(value) {
    this.idClasificado = value;
  }
	getAll(usuario, pass){
		this.setUsuarioVar(usuario);
			this.setPassVar(pass);
	  	return new Promise(
	  		resolve=>{
				this.http.get("http://127.0.0.1/avisaso/public/sesion/"+usuario+"/"+pass)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
	}

		add(nombre,apellido,correo,movil,usuario, pass){
	  	return new Promise(
	  		resolve=>{
				this.http.get("http://127.0.0.1/avisaso/public/insertar_usuario/"+nombre+"/"+apellido+"/"
				+correo+"/"+movil+"/"+usuario+"/"+pass)
					//this.http.get("http://127.0.0.1/clasificados/web_service/"+
					//				"service.php?insertarUser=insertarUser&nombre="+nombre+"&apellido="+apellido+"&correo="+correo+
					//				"&movil="+movil+"&usuario="+usuario+"&pass="+pass)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
	}

		consultUsuario(){
	  	return new Promise(
	  		resolve=>{
					this.http.get("http://127.0.0.1/clasificados/web_service/"+
									"service.php?lista=lista&usuario="+this.usuario+"&pass="+this.pass)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
		}
			//Editar
		editarLista(){
	  	return new Promise(
	  		resolve=>{
					this.http.get("http://127.0.0.1/clasificados/web_service/"+
									"service.php?editLista=editLista&idClasificado="+this.idClasificado)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
		}

		
		llamarCat(id){
	  	return new Promise(
	  		resolve=>{
					this.http.get("http://127.0.0.1/clasificados/web_service/"+
									"cat/"+id)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
		}

	//FECHAS
	consultaFechasDis(){
		return new Promise(
			resolve=>{
				  this.http.get("http://127.0.0.1/clasificados/web_service/fecha")
				.map(res=> res.json())
				.subscribe(
					data => {
						resolve(data);
					},
					err=>{
						console.log(err);
					}
				)
			}
		);
	  }
		//LISTA
			detalleLista(){
	  	return new Promise(
	  		resolve=>{
					this.http.get("http://127.0.0.1/clasificados/web_service/"+
									"service.php?detalleL=detalleL&idClasificado="+this.idClasificado)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
		}

 //TODA LA LISTA
				consultaLista(){
	  	return new Promise(
	  		resolve=>{
					this.http.get("http://127.0.0.1/avisaso/public/"+this.idUsuario+"/"+this.movil)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
		}

	//EDITAR AVISO
	editarAviso(selectCat, Titulo, aviso,semanas,inicio, Activo, Precio){
		return new Promise(
			resolve=>{
				this.http.get("http://127.0.0.1/clasificados/web_service/"+
								"service.php?editarAviso=editarAviso&idClasificado="+this.idClasificado+"idUsuario"+
								this.idUsuario+"&idCategoriaH="+selectCat+"&Titulo="+Titulo+"&aviso="+aviso+
								"&fechaInicio="+inicio+"&canSemana="+semanas+"&activo="+Activo+"Precio="+Precio)
				.map(res=> res.json())
				.subscribe(
					data => {
						resolve(data);
					},
					err=>{
						console.log(err);
					}
				)
			}
		);
	}
}
