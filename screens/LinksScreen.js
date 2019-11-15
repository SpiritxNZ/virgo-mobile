import React, { Component } from "react";
import { Text, Button } from "react-native-ui-kitten";
import RoundBorder from "../components/layout/RoundBorder";

class LinksScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <RoundBorder>
        <Text>Links</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate("Locale");
          }}
        >
          locale
        </Button>
      </RoundBorder>
    );
  }
}

export default LinksScreen;
