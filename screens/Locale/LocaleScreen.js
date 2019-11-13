import React, { Component } from "react";
import RoundBorder from "../../components/layout/RoundBorder";
import { Button } from "react-native-ui-kitten";
import { View } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <RoundBorder>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Main");
            }}
          >
            aa
          </Button>
        </RoundBorder>
      </View>
    );
  }
}

// LoginScreen.navigationOptions = {
//   title: "Login"
// };

export default LoginScreen;
