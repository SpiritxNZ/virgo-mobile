import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Layout, Text, LayoutProps} from 'react-native-ui-kitten';

interface ITextButtonProps {
  text: string;
  onPress: () => void;
  underline?: boolean;
  children?: React.ReactNode;
  style?: LayoutProps;
}

/**
 * A text button for secondary use on a page such as forget password
 *
 * @param {ITextButtonProps} props
 * @returns
 */
const TextButton = (props: ITextButtonProps) => {
  return (
    <Layout style={props.style}>
      <TouchableOpacity onPress={props.onPress}>
        {props.children}
        <Text style={props.underline && {textDecorationLine: 'underline'}}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default TextButton;
