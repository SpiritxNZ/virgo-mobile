import React from 'react';
import {Layout} from 'react-native-ui-kitten';
import styles from '../../style';
import RoundImageButton from '../../components/RoundImageButton';

const HomeImageRow = props => {
  const dataList = [
    {
      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      dest: 'Links',
    },
    {
      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      dest: 'Links',
    },
    {
      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      dest: 'Links',
    },
    {
      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      dest: 'Links',
    },
    {
      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      dest: 'Links',
    },
  ];

  return (
    <Layout style={[props.style, styles.homeImageRow, styles.row]}>
      {dataList.map((el, index) => {
        return (
          <RoundImageButton
            key={index}
            style={styles.homeImageRowItem}
            source={{
              uri: el.uri,
            }}
            dest={el.dest}
            {...props}></RoundImageButton>
        );
      })}
    </Layout>
  );
};

export default HomeImageRow;
