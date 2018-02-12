import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {GET_POST, GetPostSucces} from '../actions/post.actions';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class PostEffects {

  @Effect()
  getPost$: Observable<Action> = this.actions$.ofType(GET_POST)
    .delay(2000)
    .map(action => new GetPostSucces({
      text: action.payload,
      votes: 5
    }))
  ;

  constructor(public actions$: Actions) {
  }
}
