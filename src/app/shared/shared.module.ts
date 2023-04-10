import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoaderComponent } from './components/loader/loader.component';
import { MatIconModule } from '@angular/material/icon';
import { PopulationPipe } from './pipes/population.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    PopulationPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    LoaderComponent,
    MatIconModule,
    PopulationPipe
  ]
})
export class SharedModule {}
