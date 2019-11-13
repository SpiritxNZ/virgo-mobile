import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Radio, RadioGroup, CheckBox, Button } from "react-native-ui-kitten";
import StyledTitle from "../components/StyledTitle";
import { connect } from "react-redux";
import { AuthSession } from "expo";

class LinksScreen extends Component {
  state = {
    selectedIndex: 0,
    checkAuk: true,
    notification:false
  };

  static navigationOptions = {
    header: null
  };

  radioOnChange = selectedIndex => {
    this.setState({ selectedIndex });
  };

  storeOnChange = (checkAuk)=>{
    this.setState({checkAuk})
  }

  notificationOnChange = (notification) => {
    this.setState({notification})
  }
  render() {
    return (
      <View style={styles.container}>
        <StyledTitle />

        <View>
          <Text style={styles.chooseOptions}>CHOOSE LANGUAGE</Text>
        </View>

        <RadioGroup
          selectedIndex={this.state.selectedIndex}
          onChange={this.radioOnChange}
        >
          <Radio style={styles.radio} text="ENGLISH" />
          <Radio style={styles.radio} text="中文" />
        </RadioGroup>

        <View>
          <Text style={styles.chooseOptions}>SELECT YOUR STORE</Text>
          <CheckBox
          style={styles.checkbox}
          text='AUCKLAND'
          checked={this.state.checkAuk}
          onChange ={this.storeOnChange}
        />
           <CheckBox
          style={styles.checkbox}
          text='Enable notification'
          checked={this.state.notification}
          onChange ={this.notificationOnChange}
        />
        </View>

      <Button size='medium' style={styles.button}>Confirm</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 60
  },
  label: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "300"
  },
  line: {
    marginTop: 15,
    marginLeft: 44,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "80%"
  },
  chooseOptions: {
    marginTop: 15,
    marginLeft: 44,
    fontSize: 18,
    fontWeight: "100"
  },
  radio: {
    marginLeft: 44,
    marginVertical: 4
  },
  checkbox: {
    marginLeft: 44,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 80,
    flex:1,
    borderRadius: 10,
    width: '80%',
    marginLeft: 40
  }
});

// const mapStateToProps = () => {
//   return {};
// };

// const mapDispatchToProps = () => {};

// export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);
export default LinksScreen
