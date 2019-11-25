import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {Layout, Text, Radio} from 'react-native-ui-kitten';
import styles from '../style';

interface IStoreCartItemProps {
  source: ImageSourcePropType;
  stock: number;
  brand: string;
  color: string;
  size: string;
  condition: string;
  originalPrice: number;
  checked: boolean;
  onSale?: boolean;
  reducedPrice?: number;
}

const StoreCartItem = props => {
  return (
    <Layout style={styles.regularMarginTop}>
      <Layout style={[styles.row, styles.storeCartItemContent]}>
        <Image
          style={styles.storeCartItemImage}
          source={{
            uri:
              'https://images.unsplash.com/photo-1573759217464-c2dacb1cbdd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1893&q=80',
          }}
        />
        <Layout style={styles.storeCartItemContentDescription}>
          <Text style={styles.storeCartItemContentDescriptionStock}>
            Only 1 in stock
          </Text>
          <Text category="h6" style={styles.regularMarginTop}>
            Alexander McQueen
          </Text>
          <Text style={styles.regularMarginTop}>Black | One Size</Text>
          <Text>Condition: 90%</Text>
          <Text style={styles.regularMarginTop}>NZD$468.00</Text>
        </Layout>
        <Radio checked></Radio>
      </Layout>
      <Layout style={[styles.row, styles.regularMarginTop]}>
        <Text>Remove</Text>
        <Text style={styles.hugeMarginLeft}>Move to wishlist</Text>
      </Layout>
    </Layout>
  );
};

export default StoreCartItem;
