import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import styles from '../style';
import {StyleSheet} from 'react-native';

interface IPaymentProgressBarCircleProps {
  index: number;
}

/**
 * Used with PaymentProgressBar, display when delivery index equal to index of component in the array
 *
 * @param {IPaymentProgressBarCircleProps} props
 * @returns
 */
const PaymentProgressBarCircle = (props: IPaymentProgressBarCircleProps) => {
  if (props.index === 1) {
    return (
      <Layout
        style={[styles.paymentProgressBarCircle, localStyle.indexOne]}></Layout>
    );
  } else if (props.index === 2) {
    return (
      <Layout
        style={[styles.paymentProgressBarCircle, localStyle.indexTwo]}></Layout>
    );
  } else if (props.index === 3) {
    return (
      <Layout
        style={[
          styles.paymentProgressBarCircle,
          localStyle.indexThree,
        ]}></Layout>
    );
  } else if (props.index === 4) {
    return (
      <Layout
        style={[
          styles.paymentProgressBarCircle,
          localStyle.indexFour,
        ]}></Layout>
    );
  }
};

const localStyle = StyleSheet.create({
  indexOne: {left: '5%'},
  indexTwo: {left: '28%'},
  indexThree: {left: '55%'},
  indexFour: {left: '85%'},
});

export default PaymentProgressBarCircle;
