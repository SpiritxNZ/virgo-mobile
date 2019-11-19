import React, {Component} from 'react';
import {Text} from 'react-native';
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
import {AppState} from '../../redux/reducers/index';
import styles from '../../style';

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

  componentDidMount = () => {};

  render() {
    const {t} = this.props;
    return (
      <Layout style={[styles.localeContainer, styles.hugeMarginTop]}>
        <StyledTitle title="Virgo's Resurrection" />

        <Layout>
          <Text style={styles.localeText}>{t('localePage.cl')}</Text>
        </Layout>

        <RadioGroup
          selectedIndex={this.props.localeIndex}
          onChange={index => {
            this.radioOnChange(index);
          }}>
          {localeList.map((el, index) => (
            <Radio style={styles.localeItem} text={el} key={index} />
          ))}
        </RadioGroup>

        <Layout>
          <Text style={styles.localeText}>{t('localePage.sys')}</Text>
          <CheckBox style={styles.localeItem} text="AUCKLAND" checked />
        </Layout>

        <Button
          size="medium"
          style={styles.localeButton}
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}>
          {t('confirm')}
        </Button>
      </Layout>
    );
  }
}

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
