import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../types/joke';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
private _jokes: Joke[];

  @Input()
  set jokes(value: Joke[]) {
    this._jokes = value;
  }

  get jokes() { return this._jokes; }

  @Output()
  clicked = new EventEmitter<string>();

  onClicked = (joke: Joke) => this.clicked.next(joke.id);
}
