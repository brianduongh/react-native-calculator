import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content,
} from 'native-base';

const Login = () => (
  <Container style={styles.container}>
    <Content style={styles.content}>
      hello this is profile
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
});


export default Login;
