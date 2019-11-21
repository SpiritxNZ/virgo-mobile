import React from 'react';
import {Layout, Button} from 'react-native-ui-kitten';
import StoreHomeItem from '../../components/StoreHomeItem';
import styles from '../../style';
import StoreCartItem from '../../components/StoreCartItem';

class StoreHomeScreen extends React.Component<any, any> {
  render() {
    return (
      <Layout style={styles.regularContainer}>
        <Layout style={[styles.row, styles.storeHomeContainer]}>
          {/* <StoreHomeItem />
        <StoreHomeItem />
        <StoreHomeItem />
        <StoreHomeItem /> */}
        </Layout>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          Home
        </Button>
        <StoreCartItem></StoreCartItem>
        <StoreCartItem></StoreCartItem>
      </Layout>
    );
  }
}

export default StoreHomeScreen;
