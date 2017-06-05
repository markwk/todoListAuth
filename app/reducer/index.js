import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import alertsReducer from './alertsReducer';
import authReducer from './authReducer';

module.exports = combineReducers({
  form: formReducer,
  auth: authReducer,
  alerts: alertsReducer
});
