import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {GET_POST, GetPost, GetPostSucces} from '../actions/post.actions';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class PostEffects {

  @Effect()
  getPost: Observable<Action> = this.actions.ofType(GET_POST)
    .map((action: GetPost) => new GetPostSucces(
      {text: action.payload, votes: 5}
    ))
    .delay(1500)
  ;

  constructor(private actions: Actions, private db: AngularFireDatabase) {
  }
}
