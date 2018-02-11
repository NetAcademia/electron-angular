import {GET_POST, GET_POST_SUCCES, PostActions} from '../actions/post.actions';
import {Post} from '../models/post.model';

export function postReducer(state: Post, action: PostActions) {
  console.log('postReducer: ', action.type, state);

  switch (action.type) {
    case GET_POST:
      return {...state, loading: true};
    case GET_POST_SUCCES:
      return {...state, ...action.payload, loading: false};
    default:
      return state;
  }
}
