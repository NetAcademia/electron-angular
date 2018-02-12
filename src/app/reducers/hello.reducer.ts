import {Action} from '@ngrx/store';

const init = 'Szent habakukk Micimacko!';

export function helloReducer(state: string = init, action: Action) {
  console.log('helpReducer: ', action.type, state);
  switch (action.type) {
    case 'ENG':
      return state = 'Hello world! Elon Musk RLZ';
    case 'HUN':
      return state = 'Hello vilag, jo nekunk mert angular';
    case 'RESET':
      return state = init;
    default:
      return state;
  }
}
