import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import styles from '../style';

const RoundBorder = props => {
  return (
    <Layout style={styles.hugeMarginTop}>
      <Layout style={styles.roundBorder}>{props.children}</Layout>
    </Layout>
  );
};

export default RoundBorder;
