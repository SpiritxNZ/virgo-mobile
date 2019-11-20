import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import {Layout} from 'react-native-ui-kitten';
import Swiper from 'react-native-swiper';
import styles from '../../style';

const HomeSwiper = props => {
  const dataList = [
    'https://images.unsplash.com/photo-1569261995036-70d0dd50be24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    'https://images.unsplash.com/photo-1573760954265-29e1e76437bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
    'https://images.unsplash.com/photo-1573759217464-c2dacb1cbdd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1893&q=80',
  ];
  return (
    <Layout style={[props.style, styles.regularMarginTop]}>
      <Swiper autoplay showsPagination={false}>
        {dataList.map((el, index) => (
          <Layout style={styles.homeSwiperSlide} key={index}>
            <TouchableHighlight
              onPress={() => {
                props.navigation.navigate('Demo');
              }}>
              <Image
                style={styles.homeSwiperimageButton}
                source={{
                  uri: el,
                }}
              />
            </TouchableHighlight>
          </Layout>
        ))}
      </Swiper>
    </Layout>
  );
};

export default HomeSwiper;
