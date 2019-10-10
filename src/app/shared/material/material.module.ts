import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatDividerModule, MatListModule, MatChipsModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
