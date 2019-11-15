import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "react-native-ui-kitten";
import MarginTop from "./MarginTop";

export default RoundBorder = props => {
  return (
    <MarginTop>
      <Layout style={styles.roundBorder}>{props.children}</Layout>
    </MarginTop>
  );
};

const styles = StyleSheet.create({
  roundBorder: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8
  }
});
