import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  Radio,
  RadioGroup,
  CheckBox,
  Button,
  Layout,
} from 'react-native-ui-kitten';
import StyledBar from '../../components/StyledBar';
import {connect} from 'react-redux';
import {localeList} from '../../constants/locale/setting';
import {setLocale, ISetLocale} from '../../redux/actions/localeActions';
import {withTranslation, WithTranslation} from 'react-i18next';
import i18next from 'i18next';
import {AppState} from '../../redux/reducers/index';
import styles from '../../style';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface IProps extends WithTranslation {
  localeIndex: number;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  setLocale: (index: number) => ISetLocale;
  screenProps?: any;
}

class LocaleScreen extends Component<IProps, null> {
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

  render() {
    const {t} = this.props;
    return (
      <Layout style={[styles.localeContainer, styles.hugeMarginTop]}>
        <StyledBar>
          <Text style={styles.styledBarLabel}>Virgo's Resurrection</Text>
        </StyledBar>
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
