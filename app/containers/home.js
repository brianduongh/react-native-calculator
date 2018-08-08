import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content,
} from 'native-base';

const Login = () => (
  <Container style={styles.container}>
    <Content style={styles.content}>
      hello
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2793e8',
  },
  content: {
    flex: 1,
    paddingVertical: 200,
    paddingHorizontal: 40,
  },
  h2: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#cc181e',
  },
  form: {
    padding: 20,
  },
  button: {
    backgroundColor: '#cc181e',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});


export default Login;
