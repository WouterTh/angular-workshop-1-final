import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'jokes',
  loadChildren: () => import('./features/joke/joke.module').then(mod => mod.JokeModule)
}, {
  path: '',
  redirectTo: '/jokes/random',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
