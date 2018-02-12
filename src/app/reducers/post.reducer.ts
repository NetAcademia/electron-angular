import {GET_POST, GET_POST_SUCCES, PostActions, VOTE_UPDATE, VOTE_UPDATE_FAIL, VOTE_UPDATE_SUCCES} from '../actions/post.actions';

export interface Post {
  text: string;
  votes: number;
  loading?: boolean;
}

const initPoststate = {
  text: 'Szent habakuk',
  votes: 3,
  loading: false
};

export function postReducer(state: Post = initPoststate, action: PostActions) {
  console.log('postReducer: ', action.type, action.payload);

  switch (action.type) {
    case GET_POST:
      return {...state, loading: true};
    case GET_POST_SUCCES:
      return {...state, ...action.payload, loading: false};
    case VOTE_UPDATE:
      return {...state, loading: true};
    case VOTE_UPDATE_SUCCES:
      return {...state, ...action.payload, loading: false};
    case VOTE_UPDATE_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
}
