import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionsComponent } from './regions.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './region/country/country.component';

const routes: Routes = [
  { 
    path: '', 
    component: RegionsComponent 
  },
  {
    path: ':id',
    component: RegionComponent,
    children: [
      {
        path: 'country/:countryId',
        component: CountryComponent
      }
    ]
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
