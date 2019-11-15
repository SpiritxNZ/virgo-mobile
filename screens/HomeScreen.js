import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Avatar, Button } from "react-native-ui-kitten";
import MarginTop from "../components/layout/MarginTop";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MarginTop style={styles.container}>
        <Layout style={[styles.row, styles.header]}>
          <Button size="small">Order</Button>
          <Layout style={styles.horizontalBar}></Layout>
          <Button size="small">Details</Button>
          <Button size="small">Notification</Button>
        </Layout>
        <Layout style={[styles.row, styles.imageRow]}>
          <Avatar
            style={styles.item}
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
        </Layout>
      </MarginTop>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  horizontalBar: {
    width: 100,
    height: 2,
    backgroundColor: "black",
    alignSelf: "center"
  },
  row: { flexDirection: "row" },
  header: { justifyContent: "space-between" },
  imageRow: { marginTop: 20, justifyContent: "space-between" },
  item: {
    width: 62,
    height: 62
  }
});

export default HomeScreen;
