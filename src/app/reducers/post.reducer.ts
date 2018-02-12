import {GET_POST, PostActions} from '../actions/post.actions';
import {Post} from '../models/post.model';

const initPoststate = {
  text: 'Szent habakuk',
  votes: 3
};

export function postReducer(state: Post = initPoststate, action: PostActions) {
  console.log('postReducer: ', action.type, state);

  switch (action.type) {
    case GET_POST:
      return { ...state, text: action.payload};
    default:
      return state;
  }
}
