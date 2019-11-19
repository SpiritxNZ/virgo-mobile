import React from 'react';
import {Layout, Text} from 'react-native-ui-kitten';
import styles from '../style';

const PaymentProgressBar: React.SFC = (props: any) => {
  const {index: number} = props;
  return (
    <Layout style={styles.row}>
      <Text>Sign in</Text>
      <Text>Shipping</Text>
      <Text>Payment</Text>
      <Text>Confirmation</Text>
      {/* <Layout></Layout>
      <Layout></Layout> */}
    </Layout>
  );
};

export default PaymentProgressBar;
