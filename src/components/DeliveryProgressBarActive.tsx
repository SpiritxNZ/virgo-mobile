import React from 'react';

import {Layout, Text} from 'react-native-ui-kitten';
import styles from '../style';

interface IDeliveryProgressBarActiveProps {
  text: string;
  style?: any;
}

/**
 * Used with DeliveryProgressBar, display active style when delivery index equal to index of component in the array
 *
 * @param {IDeliveryProgressBarActiveProps} props
 * @returns
 */
const DeliveryProgressBarActive = (props: IDeliveryProgressBarActiveProps) => {
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
