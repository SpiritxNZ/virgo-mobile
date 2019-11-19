import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Layout, Avatar} from 'react-native-ui-kitten';
import styles from '../style';

const RoundImageButton = props => {
  console.log(props);
  return (
    <Layout>
      <TouchableWithoutFeedback
        onPress={() => {
          props.navigation.navigate(props.dest);
        }}>
        <Avatar style={props.style} source={props.source} />
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default RoundImageButton;
