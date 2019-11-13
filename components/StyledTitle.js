import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function StyledTitle() {
  return (
    <View>
      <Text style={styles.label}>Virgo's Resurrection</Text>
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
    marginLeft: 44,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "80%"
  }
});
