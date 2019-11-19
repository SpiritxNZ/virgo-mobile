import React, {Component} from 'react';
import MarginTop from '../components/layout/MarginTop';
import HomeHeader from './home/HomeHeader';
import HomeImageRow from './home/HomeImageRow';
import HomeSwiper from './home/HomeSwiper';
import BottomBar from '../components/BottomBar';
import styles from '../style';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BottomBar>
        <MarginTop style={styles.homeContainer}>
          <HomeHeader />
          <HomeImageRow {...this.props} />
          <HomeSwiper {...this.props} style={styles.homeSwiper} />
        </MarginTop>
      </BottomBar>
    );
  }
}

export default HomeScreen;
