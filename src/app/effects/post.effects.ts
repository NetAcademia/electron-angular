import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {GET_POST, GetPost, GetPostSucces} from '../actions/post.actions';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from '../models/post.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class PostEffects {

  @Effect()
  getPost: Observable<Action> = this.actions.ofType(GET_POST)
    .switchMap((action: GetPost) =>
      this.http.get<Post>(environment.firebase.databaseURL + action.payload)
    )
    .map(resp => new GetPostSucces(resp))
  ;

  constructor(private actions: Actions, private http: HttpClient) {
  }
}
