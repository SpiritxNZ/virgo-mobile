import React from 'react';
import {Layout, Text, Radio, LayoutProps} from 'react-native-ui-kitten';
import styles from '../style';

interface IRadioTextLeftProps {
  text: string;
  checked: boolean;
  style?: any;
}

/**
 * A component used to display a row of content when text is at left of content
 *
 * @param {IRadioTextLeftProps} props
 * @returns
 */

const RadioTextLeft = (props: IRadioTextLeftProps) => {
  return (
    <Layout
      style={[
        props.style,
        styles.row,
        styles.spaceBetween,
        styles.hugeMarginTop,
      ]}>
      <Text>{props.text}</Text>
      <Radio checked={props.checked}></Radio>
    </Layout>
  );
};

export default RadioTextLeft;
