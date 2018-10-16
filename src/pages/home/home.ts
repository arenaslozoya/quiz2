import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { SmartphonePage } from '../smartphone/smartphone';
import { TvPage } from '../tv/tv';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bocina = BocinaPage;
sp = SmartphonePage;
tv = TvPage;
lampara = LamparaPage;
  constructor(public navCtrl: NavController) {

  }
  clickBocina()
  {
    this.navCtrl.push(this.bocina);
  }
  clickTv()
  {
    this.navCtrl.push(this.tv);
  }
  clickSmartphone()
  {
    this.navCtrl.push(this.sp);
  }
  clickLampara()
  {
    this.navCtrl.push(this.lampara);
  }
}
