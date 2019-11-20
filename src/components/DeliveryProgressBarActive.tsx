import React from 'react';
import {Layout, Text} from 'react-native-ui-kitten';
import styles from '../style';

const DeliveryProgressBarActive = props => {
  return (
    <Layout>
      <Layout style={styles.deliveryProgressBarIndicator}></Layout>
      <Text style={[props.style, styles.deliveryProgressBarTextActive]}>
        {props.text}
      </Text>
    </Layout>
  );
};

export default DeliveryProgressBarActive;
