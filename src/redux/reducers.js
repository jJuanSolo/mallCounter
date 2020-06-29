import { combineReducers } from 'redux';

import reducerPrincipal from '../screens/principal/reducer';

const appReducers = combineReducers({
    reducerPrincipal,
  });

export default appReducers;