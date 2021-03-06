import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pressNum, enter, operation, clear } from './modules';
import Button from './button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 30,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: '#fff',
    backgroundColor: '#424242',
    textAlign: 'right',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#fff',
  },
});

const App = ({ calculatorState: { stack, inputState }, pressNumWithDispatch, enterAction, operationAction, clearAction }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.number}>{stack[2] || 0}</Text>
      <Text style={styles.number}>{stack[1] || 0}</Text>
      <Text style={styles.number}>{stack[0] || 0}</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" onPress={clearAction} />
        <Button text="pow" onPress={operationAction} />
        <Button text="/" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="9" onPress={pressNumWithDispatch} />
        <Button text="8" onPress={pressNumWithDispatch} />
        <Button text="7" onPress={pressNumWithDispatch} />
        <Button text="X" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="6" onPress={pressNumWithDispatch} />
        <Button text="5" onPress={pressNumWithDispatch} />
        <Button text="4" onPress={pressNumWithDispatch} />
        <Button text="-" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="3" onPress={pressNumWithDispatch} />
        <Button text="2" onPress={pressNumWithDispatch} />
        <Button text="1" onPress={pressNumWithDispatch} />
        <Button text="+" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={pressNumWithDispatch} />
        <Button text="." onPress={pressNumWithDispatch} />
        <Button text="enter" onPress={enterAction} special />
      </View>
    </View>
  </View>
);

export default connect(
  state => ({ calculatorState: state }),
  dispatch => bindActionCreators(
    {
      pressNumWithDispatch: pressNum,
      enterAction: enter,
      operationAction: operation,
      clearAction: clear,
    },
    dispatch,
  ),
)(App);
