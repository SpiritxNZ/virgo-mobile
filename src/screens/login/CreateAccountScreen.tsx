import React, {Component} from 'react';
import {Layout, Text, Button} from 'react-native-ui-kitten';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  screenProps?: any;
}

class CreateAccountScreen extends Component<IProps, null> {
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
