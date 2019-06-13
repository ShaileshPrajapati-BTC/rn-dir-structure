import {combineReducers} from 'redux';
import {HomeReducer} from '../screens/home/reducer.js';


//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.

const reducer = combineReducers({
  home: HomeReducer
})

/* export default rootReducer*/
export default {
  reducer
};
