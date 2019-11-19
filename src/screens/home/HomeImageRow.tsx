import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Avatar} from 'react-native-ui-kitten';
import Row from '../../components/layout/Row';
import styles from '../../style';

const HomeImageRow = props => {
  return (
    <Row style={[props.style, styles.homeImageRow]}>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('Links');
        }}>
        <Avatar
          style={styles.homeImageRowItem}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('Links');
        }}>
        <Avatar
          style={styles.homeImageRowItem}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('Links');
        }}>
        <Avatar
          style={styles.homeImageRowItem}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('Links');
        }}>
        <Avatar
          style={styles.homeImageRowItem}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('Links');
        }}>
        <Avatar
          style={styles.homeImageRowItem}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          }}
        />
      </TouchableHighlight>
    </Row>
  );
};

export default HomeImageRow;
