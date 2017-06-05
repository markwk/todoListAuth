import axios from 'axios';
// import Keychain from 'react-native-keychain';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertsActions';

exports.loginUser = (email, password) => {
  return function(dispatch) {
    console.log("Dispatcing loginUser Action with email: " + email + " and password: " + password);
    return axios.post(SIGNIN_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data;
      dispatch(addAlert(token));
      //dispatch(addAlert(user_id));
      dispatch(authUser(user_id));
    }).catch((error) => {
      console.log(error);
      dispatch(addAlert("Could not log in. Error: " + error));
    });
  }
}

exports.signupUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data;
      dispatch(addAlert(token));
      //dispatch(addAlert(user_id));
      dispatch(authUser(user_id));
    }).catch((error) => {
      console.log(error);
      dispatch(addAlert("Could not sign up. Error: " + error));
    });
  }
}

authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  }
}

exports.unauthUser = {
  type: 'UNAUTH_USER'
}
