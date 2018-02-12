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

export const VOTE_UPDATE = '[Post] Vote Update';

export class VoteUpdate implements Action {
  readonly type = VOTE_UPDATE;

  constructor(public payload: { path: string, post: Post }) {
  }
}

export const VOTE_UPDATE_SUCCES = '[Post] Vote Update Succes';

export class VoteUpdateSucces implements Action {
  readonly type = VOTE_UPDATE_SUCCES;

  constructor(public payload: { votes: number }) {
  }
}

export const VOTE_UPDATE_FAIL = '[Post] Vote Update Fail';

export class VoteUpdateFail implements Action {
  readonly type = VOTE_UPDATE_FAIL;

  constructor(public payload: any) {
  }
}

export type PostActions
  = GetPost
  | GetPostSucces
  | VoteUpdate
  | VoteUpdateFail
  | VoteUpdateSucces
  ;
