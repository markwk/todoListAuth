import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';


// import TodoList from './TodoList';

import {unauthUser} from '../actions';

var Main = React.createClass({
  onLogout: function() {
    this.props.dispatch(unauthUser);
    console.log("Logout function called in main.js");
  },
  render() {
    return (
      <View>
        <View>
          <Text>Main View</Text>
        </View>
        <TouchableOpacity onPress={this.onLogout}>
           <Text>
             Logout
           </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

/*
import TodoList from './TodoList';

var Main = React.createClass({
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: TodoList,
          title: 'Todo List',
          navigationBarHidden: true
        }}
        style={{flex: 1}}/>
    );
  }
});
*/

//module.exports = Main;
module.exports = connect()(Main);
