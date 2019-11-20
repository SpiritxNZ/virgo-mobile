import React from 'react';
import {Layout, Text} from 'react-native-ui-kitten';
import styles from '../style';
import DeliveryProgressBarActive from './DeliveryProgressBarActive';

const DeliveryProgressBar = (props: any) => {
  const dataList = [
    '订单已生成',
    '到达驿站',
    '到达工厂',
    '加工处理',
    '包装出库',
    '代理取货',
    '完成订单',
  ];

  return (
    <Layout
      style={[
        styles.deliveryProgressBarContainer,
        styles.row,
        styles.hugeMarginTop,
      ]}>
      {dataList.map((el, index) => {
        if (index % 2 === 0) {
          if (index === props.index) {
            return <DeliveryProgressBarActive key={index} text={el} />;
          } else {
            return (
              <Text key={index} style={styles.deliveryProgressBarText}>
                {el}
              </Text>
            );
          }
        } else {
          if (index === props.index) {
            return (
              <DeliveryProgressBarActive
                key={index}
                text={el}
                style={styles.hugeMarginTop}
              />
            );
          } else {
            return (
              <Text
                key={index}
                style={[styles.hugeMarginTop, styles.deliveryProgressBarText]}>
                {el}
              </Text>
            );
          }
        }
      })}
      <Layout style={styles.deliveryProgressBar}></Layout>
    </Layout>
  );
};

export default DeliveryProgressBar;
