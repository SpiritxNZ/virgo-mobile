import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Avatar } from "react-native-ui-kitten";

class HomeScreen extends Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Layout>
          <Avatar
            style={styles.item}
            size="giant"
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            size="giant"
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            size="giant"
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            size="giant"
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
          <Avatar
            style={styles.item}
            size="giant"
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }}
          />
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  item: {
    marginRight: 8
  }
});

export default HomeScreen;
