import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {ImageSourcePropType} from 'react-native';
import {Layout, Avatar, AvatarProps} from 'react-native-ui-kitten';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface IRoundImageButtonProps {
  dest: string;
  style: any;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  source: ImageSourcePropType;
  screenProps?: any;
}

/**
 * A round button used to navigate
 *
 * @param {IRoundImageButtonProps} props
 * @returns
 */

const RoundImageButton = (props: IRoundImageButtonProps) => {
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
