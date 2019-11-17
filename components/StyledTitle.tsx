import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function StyledTitle(props) {
  return (
    <View>
      <Text style={styles.label}>{props.title}</Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "300"
  },
  line: {
    marginTop: 15,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%"
  }
});
