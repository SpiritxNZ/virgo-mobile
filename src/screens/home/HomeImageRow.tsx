import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Avatar, Layout} from 'react-native-ui-kitten';
import styles from '../../style';

const HomeImageRow = props => {
  return (
    <Layout style={[props.style, styles.homeImageRow, styles.row]}>
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
    </Layout>
  );
};

export default HomeImageRow;
