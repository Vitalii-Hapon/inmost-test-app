import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

const materials = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [],
  exports: [
    materials,
  ],
  imports: [
    CommonModule,
    materials,
  ],
})
export class MaterialsModule {
}
