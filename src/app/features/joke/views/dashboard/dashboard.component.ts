import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Joke } from '../../types/joke';
import { JokeStore } from '../../state/joke.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  store$: any;

  constructor(
    private router: Router,
    private store: JokeStore
  ) { }

  ngOnInit() {
    this.store$ = this.store.stateChanged;
  }

  jokeClicked = (jokeId: string) => this.router.navigate([`/jokes/${jokeId}`]);
}
