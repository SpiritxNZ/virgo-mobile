import React from 'react';
import {Layout, Text} from 'react-native-ui-kitten';
import styles from '../style';
import PaymentProgressBarCircle from './PaymentProgressBarCircle';

const PaymentProgressBar = (props: any) => {
  return (
    <Layout
      style={[
        styles.row,
        styles.paymentProgressBarContainer,
        styles.hugeMarginTop,
      ]}>
      <Text style={styles.paymentProgressBarText}>Sign in</Text>
      <Text style={styles.paymentProgressBarText}>Shipping</Text>
      <Text style={styles.paymentProgressBarText}>Payment</Text>
      <Text style={styles.paymentProgressBarText}>Confirmation</Text>
      <Layout style={styles.paymentProgressBar}></Layout>
      <PaymentProgressBarCircle index={props.index}></PaymentProgressBarCircle>
    </Layout>
  );
};

export default PaymentProgressBar;
