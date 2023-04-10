import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../shared/shared.module";
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './region/country/country.component';

@NgModule({
  declarations: [
    RegionsComponent,
    RegionComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    SharedModule
  ]
})
export class RegionsModule { }
