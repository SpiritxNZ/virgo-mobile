import React from 'react';
import {Layout, Text, Radio} from 'react-native-ui-kitten';
import styles from '../style';

const radioTextLeft = props => {
  return (
    <Layout style={[props.style, styles.row]}>
      <Text>this is a text</Text>
      <Radio checked></Radio>
    </Layout>
  );
};

export default radioTextLeft;
