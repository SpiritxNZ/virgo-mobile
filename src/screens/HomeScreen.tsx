import React, {Component} from 'react';
import HomeHeader from './home/HomeHeader';
import HomeImageRow from './home/HomeImageRow';
import HomeSwiper from './home/HomeSwiper';
import BottomBarContainer from '../components/BottomBarContainer';
import styles from '../style';
import {Layout} from 'react-native-ui-kitten';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BottomBarContainer>
        <Layout style={[styles.homeContainer, styles.hugeMarginTop]}>
          <HomeHeader {...this.props} />
          <HomeImageRow {...this.props} />
          <HomeSwiper {...this.props} />
        </Layout>
      </BottomBarContainer>
    );
  }
}

export default HomeScreen;
