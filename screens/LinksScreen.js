import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text, Button, Layout } from "react-native-ui-kitten";
import RoundBorder from "../components/layout/RoundBorder";
import BottomBar from "../components/BottomBar";

class LinksScreen extends Component {
  static navigationOptions = {
    header: null
  };
  width = Dimensions.get("screen").width;

  render() {
    return (
      <BottomBar>
        <RoundBorder>
          <Text>Links</Text>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Locale");
            }}
          >
            Locale
          </Button>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            Home
          </Button>
        </RoundBorder>
      </BottomBar>
    );
  }
}

const styles = StyleSheet.create({});

export default LinksScreen;
