import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Button } from "react-native-ui-kitten";
import Row from "./layout/Row";
import layout from "../constants/Layout";

const BottomBar = props => {
  return (
    <Layout>
      <ScrollView>{props.children}</ScrollView>
      <Row style={styles.container}>
        <Button style={styles.button}>Services</Button>
        <Button style={styles.button}>My Account</Button>
      </Row>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: layout.window.height - 60,
    left: 0
  },

  button: {
    width: "50%"
  }
});

export default BottomBar;
