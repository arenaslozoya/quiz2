import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartphonePage } from './smartphone';

@NgModule({
  declarations: [
    SmartphonePage,
  ],
  imports: [
    IonicPageModule.forChild(SmartphonePage),
  ],
})
export class SmartphonePageModule {}
