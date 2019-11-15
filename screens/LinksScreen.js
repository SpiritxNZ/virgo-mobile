import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text, Button, Layout } from "react-native-ui-kitten";
import RoundBorder from "../components/layout/RoundBorder";

class LinksScreen extends Component {
  static navigationOptions = {
    header: null
  };
  width = Dimensions.get("screen").width;

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

const styles = StyleSheet.create({});

export default LinksScreen;
