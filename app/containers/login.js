import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Form, Item, Input, H1, Button, Text, Icon,
} from 'native-base';

const Login = () => (
  <Container style={styles.container}>
    <Content style={styles.content}>
      <H1 style={styles.h2}>
RxMobile
      </H1>
      <Form style={styles.form}>
        <Item>
          <Icon active name="person" />
          <Input
            placeholder="E-mail address"
            autoCapitalize="none"
          />
        </Item>
        <Item>
          <Icon active name="lock" />
          <Input
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
          />
        </Item>
        <Button
          style={styles.button}
          full
          rounded
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>
Login
          </Text>
        </Button>
        <Button
          style={styles.button}
          full
        >
          <Text>
Register
          </Text>
        </Button>
      </Form>
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
