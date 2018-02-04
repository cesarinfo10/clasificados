import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetalleListaPage } from '../pages/detalle-lista/detalle-lista';
import { EditListaPage } from '../pages/edit-lista/edit-lista';
import { UsuarioPage } from '../pages/usuario/usuario';
import { AddRegistroUserPage } from '../pages/add-registro-user/add-registro-user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SeviciosProvider } from '../providers/sevicios/sevicios';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditListaPage,
    DetalleListaPage,
    UsuarioPage,
    AddRegistroUserPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditListaPage,
    DetalleListaPage,
    UsuarioPage,
    AddRegistroUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SeviciosProvider
  ]
})
export class AppModule {}
