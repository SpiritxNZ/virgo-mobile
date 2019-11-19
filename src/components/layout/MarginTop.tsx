import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "react-native-ui-kitten";

const MarginTop = props => {
  return (
    <Layout style={[props.style, styles.container]}>{props.children}</Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});

export default MarginTop;
