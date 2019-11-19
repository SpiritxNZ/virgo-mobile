import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import styles from '../../style';

const Row = props => {
  return <Layout style={[props.style, styles.row]}>{props.children}</Layout>;
};

export default Row;
