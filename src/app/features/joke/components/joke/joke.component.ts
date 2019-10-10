import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../types/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Input()
  joke: Joke;
}
