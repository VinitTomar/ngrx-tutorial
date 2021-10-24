import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { CounterComponent } from './counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    StoreModule.forFeature('count', counterReducer),
    CommonModule,
    CounterRoutingModule,
    MatButtonModule
  ]
})
export class CounterModule { }
