import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import MarginTop from './layout/MarginTop';
import styles from '../style';

const RoundBorder = props => {
  return (
    <MarginTop>
      <Layout style={styles.roundBorder}>{props.children}</Layout>
    </MarginTop>
  );
};

export default RoundBorder;
