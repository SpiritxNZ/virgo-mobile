import React, {Component} from 'react';
import HomeHeader from './home/HomeHeader';
import HomeImageRow from './home/HomeImageRow';
import HomeSwiper from './home/HomeSwiper';
import BottomBar from '../components/BottomBar';
import styles from '../style';
import {View} from 'react-native';
import {Layout} from 'react-native-ui-kitten';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BottomBar>
        <Layout style={[styles.homeContainer, styles.marginTop]}>
          <HomeHeader />
          <HomeImageRow {...this.props} />
          <HomeSwiper {...this.props} style={styles.homeSwiper} />
        </Layout>
      </BottomBar>
    );
  }
}

export default HomeScreen;
