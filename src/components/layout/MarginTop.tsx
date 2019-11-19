import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import styles from '../../style';

const MarginTop = props => {
  return (
    <Layout style={[props.style, styles.marginTop]}>{props.children}</Layout>
  );
};

export default MarginTop;
