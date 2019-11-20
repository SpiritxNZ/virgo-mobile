import React, {Component} from 'react';
import {Layout, Text, Button} from 'react-native-ui-kitten';

class CreateAccountScreen extends Component<any, any> {
  render() {
    return (
      <Layout>
        <Text>CreateAccount</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')}>
          Login
        </Button>
      </Layout>
    );
  }
}

export default CreateAccountScreen;
