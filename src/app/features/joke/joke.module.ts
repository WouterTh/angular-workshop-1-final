import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SharedModule } from '../../shared';
import { JokeComponent } from './components/joke/joke.component';
import { ListComponent } from './components/list/list.component';
import { RandomComponent } from './views/random/random.component';
import { DetailComponent } from './views/detail/detail.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    DashboardComponent,
    JokeComponent,
    ListComponent,
    RandomComponent,
    DetailComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JokeRoutingModule
  ]
})
export class JokeModule { }
