import {Action} from '@ngrx/store';

export const GET_POST = '[Post] GetPost';

export class GetPost implements Action {
  readonly type = GET_POST;

  constructor(public payload: string) {
  }
}

export type PostActions = GetPost;
