import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Avatar } from "react-native-ui-kitten";
import Row from "../layout/Row";

const HomeImageRow = props => {
  return (
    <Row style={[props.style, styles.imageRow]}>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Links");
        }}
      >
        <Avatar
          style={styles.item}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Links");
        }}
      >
        <Avatar
          style={styles.item}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Links");
        }}
      >
        <Avatar
          style={styles.item}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Links");
        }}
      >
        <Avatar
          style={styles.item}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Links");
        }}
      >
        <Avatar
          style={styles.item}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          }}
        />
      </TouchableHighlight>
    </Row>
  );
};

const styles = StyleSheet.create({
  imageRow: { marginTop: 20, justifyContent: "space-between" },
  item: {
    width: 62,
    height: 62
  }
});

export default HomeImageRow;
