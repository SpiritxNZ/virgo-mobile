import React from "react";
import { Layout } from "react-native-ui-kitten";

const Row = props => {
  return (
    <Layout style={[props.style, { flexDirection: "row" }]}>
      {props.children}
    </Layout>
  );
};

export default Row;
