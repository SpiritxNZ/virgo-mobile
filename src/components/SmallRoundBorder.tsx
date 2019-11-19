import React from 'react';
import {Layout, Text} from 'react-native-ui-kitten';
import styles from '../style';

const SmallRoundBorder = props => {
  return (
    <Layout
      style={[
        props.style,
        styles.smallRoundBorderContainer,
        styles.row,
        styles.hugeMarginTop,
      ]}>
      {props.children}
    </Layout>
  );
};

export default SmallRoundBorder;
