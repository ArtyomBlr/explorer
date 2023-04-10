import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent } from './components/loader/loader.component';
import { PopulationPipe } from './pipes/population.pipe';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';

@NgModule({
  declarations: [
    LoaderComponent,
    PopulationPipe,
    AuthorDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    LoaderComponent,
    MatIconModule,
    PopulationPipe,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
