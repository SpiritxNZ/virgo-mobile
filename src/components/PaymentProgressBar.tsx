import React from "react";
import { Layout, Text } from "react-native-ui-kitten";
import Row from "../components/layout/Row";

const PaymentProgressBar: React.SFC = (props: any) => {
  const { index: number } = props;
  return (
    <Row>
      <Text>Sign in</Text>
      <Text>Shipping</Text>
      <Text>Payment</Text>
      <Text>Confirmation</Text>
      {/* <Layout></Layout>
      <Layout></Layout> */}
    </Row>
  );
};

export default PaymentProgressBar;
