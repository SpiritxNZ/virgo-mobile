import React, {Component} from 'react';
import {Layout, Text, Button, Input} from 'react-native-ui-kitten';
import TextButton from '../../components/TextButton';
import RoundBorder from '../../components/RoundBorder';
import styles from '../../style';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  screenProps?: any;
}

interface IState {
  Email: string;
  password: string;
}

class LoginScreen extends Component<IProps, IState> {
  state = {
    Email: '',
    password: '',
  };

  onChangeEmail = (Email: string) => {
    this.setState({Email});
  };

  onChangePassword = (password: string) => {
    this.setState({password});
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <RoundBorder>
        <Text category="h5">Existing Customer</Text>
        <Layout style={styles.regularMarginTop}>
          <Input
            value={this.state.Email}
            onChangeText={this.onChangeEmail}
            placeholder="E-mail"
          />
          <Input
            value={this.state.password}
            onChangeText={this.onChangePassword}
            placeholder="password"
          />
        </Layout>
        <Button
          style={styles.regularMarginTop}
          onPress={() => {
            (this.props as any).navigation.navigate('Home');
          }}>
          Log In
        </Button>
        <TextButton
          style={[styles.regularMarginTop, styles.rowReverse]}
          text="Forgotten Password"
          underline
          onPress={() => console.log('a')}
        />
        <Text style={styles.hugeMarginTop} category="h5">
          New Customer
        </Text>
        <Button
          style={styles.regularMarginTop}
          onPress={() => {
            (this.props as any).navigation.navigate('CreateAccount');
          }}>
          Create Account
        </Button>
        <Layout style={styles.hugeMarginTop}>
          <TextButton
            onPress={() => {}}
            style={styles.regularMarginTop}
            text="Log in with Fackbook"
          />
          <TextButton
            onPress={() => {}}
            style={styles.regularMarginTop}
            text="Log in with Wechat"
          />
          <TextButton
            onPress={() => {}}
            style={styles.regularMarginTop}
            text="Log in with Google"
          />
        </Layout>
      </RoundBorder>
    );
  }
}

export default LoginScreen;
