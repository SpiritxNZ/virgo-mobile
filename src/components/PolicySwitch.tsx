import React from 'react';
import {Layout, Text, Toggle} from 'react-native-ui-kitten';
import styles from '../style';

const PolicySwitch = (props: any) => {
  console.log(props.toggleOnChange);
  return (
    <Layout
      style={[styles.row, styles.hugeMarginTop, styles.spaceBetween]}>
      <Layout style={styles.policySwitchTextContainer}>
        <Text>
          I would like to receive the latest news from Virgo by E-mail.By
          signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </Text>
      </Layout>
      <Toggle
        checked={props.checked}
        onChange={checked => props.toggleOnChange(checked)}
      />
    </Layout>
  );
};

export default PolicySwitch;
