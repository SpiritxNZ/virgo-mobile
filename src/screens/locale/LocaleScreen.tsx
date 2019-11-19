import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Radio,
  RadioGroup,
  CheckBox,
  Button,
  Layout,
} from 'react-native-ui-kitten';
import StyledTitle from '../../components/StyledTitle';
import {connect} from 'react-redux';
import {localeList} from '../../constants/locale/setting';
import {setLocale} from '../../redux/actions/localeActions';
import {withTranslation} from 'react-i18next';
import i18next from 'i18next';
import MarginTop from '../../components/layout/MarginTop';
import {AppState} from '../../redux/reducers/index';

class LocaleScreen extends Component<any, any> {
  radioOnChange = (index: number) => {
    this.props.setLocale(index);
    if (index === 0) {
      i18next.changeLanguage('en');
    } else if (index === 1) {
      i18next.changeLanguage('ch');
    } else {
      i18next.changeLanguage('en');
    }
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    const {t} = this.props;
    return (
      <MarginTop style={styles.container}>
        <StyledTitle title="Virgo's Resurrection" />

        <Layout>
          <Text style={styles.chooseOptions}>{t('localePage.cl')}</Text>
        </Layout>

        <RadioGroup
          selectedIndex={this.props.localeIndex}
          onChange={index => {
            this.radioOnChange(index);
          }}>
          {localeList.map((el, index) => (
            <Radio style={styles.item} text={el} key={index} />
          ))}
        </RadioGroup>

        <Layout>
          <Text style={styles.chooseOptions}>{t('localePage.sys')}</Text>
          <CheckBox style={styles.item} text="AUCKLAND" checked />
        </Layout>

        <Button
          size="medium"
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}>
          {t('confirm')}
        </Button>
      </MarginTop>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 44,
  },
  chooseOptions: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: '100',
  },
  item: {
    marginVertical: 6,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 120,
    flex: 1,
    borderRadius: 10,
    width: '100%',
  },
});

const mapStateToProps = (state: AppState) => {
  return {localeIndex: state.localeReducer.localeIndex};
};

const mapDispatchToProps = {
  setLocale,
};

// export type ReduxType = ReturnType<typeof mapStateToProps>;

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(LocaleScreen),
);
