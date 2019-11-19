import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from 'react-native-ui-kitten';
import MarginTop from './MarginTop';

const RoundBorder = props => {
  return (
    <MarginTop>
      <Layout style={styles.roundBorder}>{props.children}</Layout>
    </MarginTop>
  );
};

export default RoundBorder;

const styles = StyleSheet.create({
  roundBorder: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
});
