import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "react-native-ui-kitten";
import Row from "../../components/layout/Row";

const HomeHeader = props => {
  return (
    <Row style={[props.style, styles.header]}>
      <Button size="small">Order</Button>
      <Layout style={styles.horizontalBar}></Layout>
      <Button size="small">Details</Button>
      <Button size="small">Notification</Button>
    </Row>
  );
};

const styles = StyleSheet.create({
  header: { justifyContent: "space-between" },
  horizontalBar: {
    width: 100,
    height: 2,
    backgroundColor: "black",
    alignSelf: "center"
  }
});

export default HomeHeader;
