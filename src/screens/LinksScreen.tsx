import React, {Component} from 'react';
import RoundBorder from '../components/RoundBorder';
import BottomBar from '../components/BottomBar';
import {Text, Button} from 'react-native-ui-kitten';

class LinksScreen extends Component<any, any> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BottomBar>
        <RoundBorder>
          <Text>Links</Text>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Locale');
            }}>
            Locale
          </Button>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            Home
          </Button>
        </RoundBorder>
      </BottomBar>
    );
  }
}

export default LinksScreen;
