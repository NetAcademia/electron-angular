import {GET_POST, PostActions} from '../actions/post.actions';
import {Post} from '../models/post.model';

export function postReducer(state: Post, action: PostActions) {
  console.log(action.type, state);

  switch (action.type) {
    case GET_POST:
      return {text: action.payload, votes: 5};
    default:
      return state;
  }
}
