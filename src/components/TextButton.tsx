import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Layout, Text} from 'react-native-ui-kitten';

const TextButton = props => {
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
