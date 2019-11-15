import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MarginTop from "../components/layout/MarginTop";
import HomeHeader from "../components/home/HomeHeader";
import HomeImageRow from "../components/home/HomeImageRow";
import HomeSwiper from "../components/home/HomeSwiper";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <MarginTop style={styles.container}>
        <HomeHeader />
        <HomeImageRow {...this.props} />
        <HomeSwiper {...this.props} style={styles.swiper} />
      </MarginTop>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  swiper: {
    marginTop: 10
  }
});

export default HomeScreen;
