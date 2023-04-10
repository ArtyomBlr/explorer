import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { 
    path: '', 
    component: RegionsComponent 
  },
  {
    path: ':id',
    component: RegionComponent
  },
  {
    path: 'country/:cca',
    component: CountryComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule {}
