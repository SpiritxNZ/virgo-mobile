import React from 'react';
import {Layout, LayoutProps} from 'react-native-ui-kitten';
import styles from '../style';

interface ISmallRoundBorderProps {
  children: React.ReactNode;
  style?: any;
}

/**
 * A small round border component with text inside
 *
 * @param {ISmallRoundBorderProps} props
 * @returns
 */
const SmallRoundBorder = (props: ISmallRoundBorderProps) => {
  return (
    <Layout
      style={[
        props.style,
        styles.smallRoundBorderContainer,
        styles.row,
        styles.hugeMarginTop,
      ]}>
      {props.children}
    </Layout>
  );
};

export default SmallRoundBorder;
