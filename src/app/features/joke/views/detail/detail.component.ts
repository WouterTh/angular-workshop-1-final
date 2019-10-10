import { Component, OnInit } from '@angular/core';
import { JokeStore } from '../../state/joke.store';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Joke } from '../../types/joke';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  joke$: Observable<Joke>;

  constructor(
    private location: Location,
    private store: JokeStore,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.joke$ = this.router.paramMap.pipe(
      switchMap((param: ParamMap) => this.store.getById(param.get('id')))
    );
  }

  back = () => this.location.back();
}
