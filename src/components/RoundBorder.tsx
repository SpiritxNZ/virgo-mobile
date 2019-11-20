import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import styles from '../style';

interface IRoundBorderProps {
  children?: React.ReactNode;
}

/**
 * A roundborder layout component used to wrap elements inside
 *
 * @param {*} props
 * @returns
 */
const RoundBorder = (props: IRoundBorderProps) => {
  return (
    <Layout style={styles.hugeMarginTop}>
      <Layout style={styles.roundBorder}>{props.children}</Layout>
    </Layout>
  );
};

export default RoundBorder;
