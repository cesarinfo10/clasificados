import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRegistroUserPage } from './add-registro-user';

@NgModule({
  declarations: [
    AddRegistroUserPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRegistroUserPage),
  ],
})
export class AddRegistroUserPageModule {}
