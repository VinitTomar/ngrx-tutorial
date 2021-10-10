import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { CounterRoutingModule } from './counter-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { counterReducer } from './counter.reducer';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CounterRoutingModule,
    CommonModule,
    StoreModule.forFeature('count',counterReducer),
    MatCardModule,
    MatButtonModule
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
