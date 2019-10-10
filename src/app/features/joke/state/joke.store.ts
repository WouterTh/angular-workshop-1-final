import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { Observable, of, concat, combineLatest } from 'rxjs';

import { JokeState } from './joke.state';
import { HttpClient } from '@angular/common/http';
import { tap, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Joke } from '../types/joke';

@Injectable({ providedIn: 'root' })
export class JokeStore extends ObservableStore<JokeState> {
    constructor(private http: HttpClient) {
        super({ logStateChanges: true, trackStateHistory: true });
        const initialStoreState: JokeState = {
            categories: [],
            jokes: null,
            joke: undefined
        };
        this.setState(initialStoreState, 'initialize');
    }

    addFavorite(joke: Joke): void {
        let jokes = this.getState().jokes;
        if (jokes && !jokes.some(j => j.id === joke.id)) {
            jokes.push(joke);
        } else {
            jokes = [joke];
        }
        this.setState({ jokes }, 'add favorite');
    }

    getCategories = (): Observable<string[]> => {
        const categories = this.getState().categories;
        if (categories && categories.length > 0) {
            return of(categories);
        } else {
            return this.http.get<string[]>('https://api.chucknorris.io/jokes/categories').pipe(
                tap(data => this.setState({ categories: data }, 'get categories'))
            );
        }
    }

    get = (): Observable<Joke[]> => {
        return of(this.getState().jokes);
    }

    getById(id: string): Observable<Joke> {
        const joke = this.getState().jokes.find(j => j.id === id);
        return of(joke);
    }

    getRandom = (): Observable<Joke> => {
        return this.getCategories().pipe(
            switchMap((cats: string[]) => {
                const cat = cats[Math.floor((Math.random() * cats.length))];
                return this.http.get(`https://api.chucknorris.io/jokes/random?category=${cat}`);
            }),
            map((result: any) => ({ text: result.value, id: result.id, icon: result.icon_url, categories: result.categories }))
        );
    }

}
