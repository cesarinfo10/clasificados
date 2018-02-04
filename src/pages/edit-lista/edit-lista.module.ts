import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditListaPage } from './edit-lista';

@NgModule({
  declarations: [
    EditListaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditListaPage),
  ],
})
export class EditListaPageModule {}
