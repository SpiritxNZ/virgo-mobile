import React from 'react';
import {TouchableHighlight, Image, StyleSheet} from 'react-native';
import {Layout} from 'react-native-ui-kitten';
import Swiper from 'react-native-swiper';
import layout from '../../constants/Layout';

const HomeSwiper = props => {
  return (
    <Layout style={[props.style, styles.swiper]}>
      <Swiper autoplay showsPagination={false}>
        <Layout style={styles.slide}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate('Demo');
            }}>
            <Image
              style={styles.imageButton}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1569261995036-70d0dd50be24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
              }}
            />
          </TouchableHighlight>
        </Layout>
        <Layout style={styles.slide}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate('Demo');
            }}>
            <Image
              style={styles.imageButton}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1573760954265-29e1e76437bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
              }}
            />
          </TouchableHighlight>
        </Layout>
        <Layout style={styles.slide}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate('Demo');
            }}>
            <Image
              style={styles.imageButton}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1573759217464-c2dacb1cbdd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1893&q=80',
              }}
            />
          </TouchableHighlight>
        </Layout>
      </Swiper>
    </Layout>
  );
};

const styles = StyleSheet.create({
  swiper: {
    height: 450,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButton: {
    width: layout.window.width - 24,
    flex: 1,
  },
});

export default HomeSwiper;
