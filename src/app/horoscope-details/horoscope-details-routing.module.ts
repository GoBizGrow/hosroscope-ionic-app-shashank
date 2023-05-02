import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoroscopeDetailsPage } from './horoscope-details.page';

const routes: Routes = [
  {
    path: '',
    component: HoroscopeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopeDetailsPageRoutingModule {}
