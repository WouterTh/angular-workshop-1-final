import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../../types/joke';
import { JokeStore } from '../../state/joke.store';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  joke$: Observable<Joke>;

  constructor(private store: JokeStore) { }

  ngOnInit() {
    this.joke$ = this.store.getRandom();
  }

  addToFavorites = (joke: Joke) => this.store.addFavorite(joke);

  refresh = () => this.joke$ = this.store.getRandom();

}
