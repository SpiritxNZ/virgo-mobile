import React from 'react';
import {Layout, Text} from 'react-native-ui-kitten';
import styles from '../style';

export default function StyledTitle(props) {
  return (
    <Layout>
      <Text style={styles.styledTitleLabel}>{props.title}</Text>
      <Layout style={styles.styledTitleLine}></Layout>
    </Layout>
  );
}
