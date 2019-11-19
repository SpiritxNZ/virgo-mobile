import React from 'react';
import {Layout, Button} from 'react-native-ui-kitten';
import styles from '../../style';

const HomeHeader = props => {
  return (
    <Layout style={[props.style, styles.homeHeader, styles.row]}>
      <Button size="small">Order</Button>
      <Layout style={styles.homeHeaderHorizontalBar}></Layout>
      <Button size="small">Details</Button>
      <Button size="small">Notification</Button>
    </Layout>
  );
};

// const styles = StyleSheet.create({
//   header: {
//     justifyContent: 'space-between',
//   },
//   horizontalBar: {
//     width: 100,
//     height: 2,
//     backgroundColor: 'black',
//     alignSelf: 'center',
//   },
// });

export default HomeHeader;
