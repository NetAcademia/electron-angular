import {Action} from '@ngrx/store';
import {Post} from '../reducers/post.reducer';

export const GET_POST = '[POST] Get Post';

export class GetPost implements Action {
  readonly type = GET_POST;

  constructor(public payload: string) {
  }
}

export const GET_POST_SUCCES = '[Post] Get Post Succes';

export class GetPostSucces implements Action {
  readonly type = GET_POST_SUCCES;

  constructor(public payload: Post) {
  }
}


export type PostActions
  = GetPost
  ;
