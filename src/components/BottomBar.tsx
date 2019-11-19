import React from 'react';
import {ScrollView} from 'react-native';
import {Layout, Button} from 'react-native-ui-kitten';
import Row from './layout/Row';
import styles from '../style';

const BottomBar = (props: any) => {
  return (
    <Layout>
      <ScrollView>{props.children}</ScrollView>
      <Row style={styles.bottomBarContainer}>
        <Button style={styles.bottomBarButton}>Services</Button>
        <Button style={styles.bottomBarButton}>My Account</Button>
      </Row>
    </Layout>
  );
};

export default BottomBar;
