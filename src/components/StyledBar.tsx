import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import styles from '../style';

interface IStyledBarProps {
  children?: React.ReactNode;
}

/**
 * A styled bar. A text component can be appended for the use of header.
 *
 * @param {IStyledBarProps} props
 * @returns
 */
const StyledBar = (props: IStyledBarProps) => {
  return (
    <Layout>
      {props.children}
      <Layout style={styles.styledBarLine}></Layout>
    </Layout>
  );
};

export default StyledBar;
