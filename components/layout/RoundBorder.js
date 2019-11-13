import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "react-native-ui-kitten";

export default RoundBorder = props => {
  return <Layout style={styles.roundBorder}>{props.children}</Layout>;
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
