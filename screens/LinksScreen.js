import React, { Component } from 'react';
import { View, StyleSheet,Text} from 'react-native';
import {Radio, RadioGroup} from 'react-native-ui-kitten'
import StyledTitle from '../components/StyledTitle';
import {connect} from 'react-redux'

class  LinksScreen extends Component {
  state = {
    selectedIndex: 0,
  };

  onChange = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render(){
     return (
    <View>
      <StyledTitle/>

      <View >
         <Text style={styles.lancho} >CHOOSE LANGUAGE</Text>
      </View>

      <RadioGroup
        selectedIndex={this.state.selectedIndex}
        onChange={this.onChange}>
        <Radio style={styles.radio} text='ENGLISH' />
        <Radio style={styles.radio} text='中文' />
      </RadioGroup>

    </View>
  );
  }
 
}



const styles = StyleSheet.create({
label:{
  fontSize: 22,
  textAlign: 'center',
  fontWeight:'300'
},
line:{
  marginTop: 15,
  marginLeft:44,
  borderBottomColor:'black',
  borderBottomWidth: 2,
  width:'80%',
},
lancho:{
  marginTop: 15,
  marginLeft:44,
  fontSize:18,
  fontWeight: '100',
},
radio: {
  marginLeft:44,
  marginVertical: 4,
},
});

const mapStateToProps = () =>{
  return {
  
  }
}

const mapDispatchToProps = () =>{

}


export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);