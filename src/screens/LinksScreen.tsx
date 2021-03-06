import React, {Component} from 'react';
import RoundBorder from '../components/RoundBorder';
import BottomBarContainer from '../components/BottomBarContainer';
import {Text, Button} from 'react-native-ui-kitten';
import PaymentProgressBar from '../components/PaymentProgressBar';
import PolicySwitch from '../components/PolicySwitch';
import SmallRoundBorder from '../components/SmallRoundBorder';
import RadioTextLeft from '../components/RadioTextLeft';
import DeliveryProgressBar from '../components/DeliveryProgressBar';

class LinksScreen extends Component<any, any> {
  static navigationOptions = {
    header: null,
  };

  state = {
    checked: false,
  };

  buttonOnPress = (dest: string) => {
    this.props.navigation.navigate(dest);
  };

  toggleOnChange = (checked: boolean) => {
    this.setState({checked});
  };

  render() {
    const {checked} = this.state;
    return (
      <BottomBarContainer>
        <RoundBorder>
          <Text>Links</Text>
          <Button
            onPress={() => {
              this.buttonOnPress('Locale');
            }}>
            Locale
          </Button>
          <Button
            onPress={() => {
              this.buttonOnPress('Home');
            }}>
            Home
          </Button>
          <PaymentProgressBar index={4} />
          <PolicySwitch
            checked={checked}
            toggleOnChange={checked =>
              this.toggleOnChange(checked)
            }></PolicySwitch>
          <SmallRoundBorder>
            <Text>$5.00NZD</Text>
          </SmallRoundBorder>
          <RadioTextLeft text="this is a text" checked />
          <DeliveryProgressBar index={2} />
        </RoundBorder>
      </BottomBarContainer>
    );
  }
}

export default LinksScreen;
