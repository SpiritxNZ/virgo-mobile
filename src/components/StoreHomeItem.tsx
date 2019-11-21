import React from 'react';
import {Image, Text, ImageSourcePropType} from 'react-native';
import {Layout, Button} from 'react-native-ui-kitten';
import styles from '../style';

interface IStoreHomeItemProps {
  source: ImageSourcePropType;
  originalPrice: number;
  onSale: boolean;
  condition: string;
  size: string;
  style?: any;
  ReducedPrice?: number;
}

const StoreHomeItem = props => {
  return (
    <Layout
      style={[
        styles.storeHomeItemContainer,
        props.style,
        styles.regularMarginTop,
      ]}>
      <Button>Like</Button>
      <Image
        style={styles.storeHomeItemImage}
        source={{
          uri:
            'https://images.unsplash.com/photo-1569261995036-70d0dd50be24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
        }}
      />
      <Text>Valentino</Text>
      <Layout style={styles.row}>
        <Text style={styles.storeHomeItemOriginalPrice}>$500.00</Text>
        <Text>/$310.00</Text>
      </Layout>
      <Text>Condition:80%</Text>
      <Text>Size:M</Text>
      <Button>Add to cart</Button>
    </Layout>
  );
};

export default StoreHomeItem;
