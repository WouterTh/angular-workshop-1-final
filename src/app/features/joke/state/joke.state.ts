import { Joke } from '../types/joke';

export interface JokeState {
    joke: Joke;
    jokes: Joke[];
    categories: string[];
}
