import React from 'react';
import {ScrollView} from 'react-native';
import {Layout, Button} from 'react-native-ui-kitten';
import styles from '../style';

const BottomBar = (props: any) => {
  return (
    <Layout>
      <ScrollView>{props.children}</ScrollView>
      <Layout style={[styles.bottomBarContainer, styles.row]}>
        <Button style={styles.bottomBarButton}>Services</Button>
        <Button style={styles.bottomBarButton}>My Account</Button>
      </Layout>
    </Layout>
  );
};

export default BottomBar;
