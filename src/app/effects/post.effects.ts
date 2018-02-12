import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {GET_POST, GetPost, GetPostSucces} from '../actions/post.actions';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Post} from '../reducers/post.reducer';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PostEffects {

  @Effect()
  getPost$: Observable<Action> = this.actions$.ofType(GET_POST)
    .switchMap((a: GetPost) => this.http
      .get<Post>(environment.firebase.databaseURL + a.payload)
    )
    .map(resp => new GetPostSucces(resp))
;

  constructor(public actions$: Actions, private http: HttpClient) {
  }
}
