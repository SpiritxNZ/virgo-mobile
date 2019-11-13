import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Radio, RadioGroup, CheckBox, Button } from "react-native-ui-kitten";
import StyledTitle from "../../components/StyledTitle";
import { connect } from "react-redux";
import { localeList } from "../../constants/locale/setting";
import { setLocale, setLocation } from "../../action/index";

class LocaleScreen extends Component {
  state = {
    checkAuk: true,
    notification: false
  };

  static navigationOptions = {
    header: null
  };

  radioOnChange = selectedIndex => {
    this.setState({ selectedIndex });
  };

  storeOnChange = checkAuk => {
    this.setState({ checkAuk });
  };

  notificationOnChange = notification => {
    this.setState({ notification });
  };
  render() {
    return (
      <View style={styles.container}>
        <StyledTitle />

        <View>
          <Text style={styles.chooseOptions}>CHOOSE LANGUAGE</Text>
        </View>

        <RadioGroup
          selectedIndex={this.props.localeIndex}
          onChange={index => this.props.setLocale(index)}
        >
          {localeList.map((el, index) => (
            <Radio style={styles.item} text={el} key={index} />
          ))}
        </RadioGroup>

        <View>
          <Text style={styles.chooseOptions}>SELECT YOUR STORE</Text>
          <CheckBox
            style={styles.item}
            text="AUCKLAND"
            checked={this.state.checkAuk}
            onChange={this.storeOnChange}
          />
          <CheckBox
            style={styles.item}
            text="Enable notification"
            checked={this.state.notification}
            onChange={this.notificationOnChange}
          />
        </View>

        <Button
          size="medium"
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Main");
          }}
        >
          Confirm
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 44
  },
  chooseOptions: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "100"
  },
  item: {
    marginVertical: 6
  },
  button: {
    backgroundColor: "black",
    marginTop: 120,
    flex: 1,
    borderRadius: 10,
    width: "100%"
  }
});

const mapStateToProps = state => {
  return { localeIndex: state.localeReducer.localeIndex };
};

const mapDispatchToProps = dispatch => ({
  setLocale: index => {
    dispatch(setLocale(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocaleScreen);
// export default LocaleScreen;
