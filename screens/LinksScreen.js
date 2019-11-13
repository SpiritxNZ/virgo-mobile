import React from 'react';
import { View, StyleSheet,Text} from 'react-native';
import {CheckBox} from 'react-native-ui-kitten'

export default function LinksScreen() {
  state={
    language: null
  }
  return (
    <View>
      <Text style={styles.label}>Virgo's Resurrection</Text>
      <View style = {styles.line}></View>
      <View >
         <Text style={styles.lancho} >CHOOSE LANGUAGE</Text>

      </View>
        <CheckBox
          style={styles.checkbox}
          text='ENGLISH'
          // checked={this.state.checked1}
          // onChange={this.onChecked1Change}
        />
    </View>
  );
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
checkbox:{
  marginTop: 15,
  marginLeft:44,
}
});
