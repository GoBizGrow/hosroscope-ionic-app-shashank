import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoroscopeDetailsPageRoutingModule } from './horoscope-details-routing.module';

import { HoroscopeDetailsPage } from './horoscope-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoroscopeDetailsPageRoutingModule
  ],
  declarations: [HoroscopeDetailsPage]
})
export class HoroscopeDetailsPageModule {}
