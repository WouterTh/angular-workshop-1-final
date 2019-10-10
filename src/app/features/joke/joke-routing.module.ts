import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DetailComponent } from './views/detail/detail.component';
import { RandomComponent } from './views/random/random.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  data: {
    display: { text: 'Favorites', path: '/jokes' }
  }
}, {
  path: 'random',
  component: RandomComponent,
  data: {
    display: { text: 'Random', path: '/jokes/random' }
  }
}, {
  path: ':id',
  component: DetailComponent
}];

export const routeToken = new InjectionToken<Routes>('joke routes', {
  providedIn: 'root',
  factory: () => routes
});

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
