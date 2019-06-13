import * as Actions from './loginActions'
import _ from 'lodash';

const initialState = {
  data: ''
};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS: {
      return _.assign( {}, state, action.data );
    }
    default:
      return state
  }
}