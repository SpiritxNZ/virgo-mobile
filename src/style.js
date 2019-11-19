import {StyleSheet} from 'react-native';
import layout from './constants/Layout';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  hugeMarginTop: {
    marginTop: 30,
  },
  regularMarginTop: {
    marginTop: 10,
  },
  roundBorder: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
  localeContainer: {
    marginHorizontal: 44,
  },
  localeText: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: '100',
  },
  localeItem: {
    marginVertical: 6,
  },
  localeButton: {
    backgroundColor: 'black',
    marginTop: 120,
    flex: 1,
    borderRadius: 10,
    width: '100%',
  },
  homeContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  homeHeader: {
    justifyContent: 'space-between',
  },
  homeHeaderHorizontalBar: {
    width: 100,
    height: 2,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  homeImageRow: {
    marginTop: 20,
    justifyContent: 'space-between',
  },
  homeImageRowItem: {
    width: 60,
    height: 60,
  },
  homeSwiper: {
    height: 450,
  },
  homeSwiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeSwiperimageButton: {
    width: layout.window.width - 24,
    flex: 1,
  },
  bottomBarContainer: {
    position: 'absolute',
    top: layout.window.height - 60,
    left: 0,
  },
  bottomBarButton: {
    width: '50%',
  },
  styledTitleLabel: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '300',
  },
  styledTitleLine: {
    marginTop: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
  },
  paymentProgressBarContainer: {
    position: 'relative',
    justifyContent: 'space-between',
  },
  paymentProgressBar: {
    position: 'absolute',
    top: '50%',
    height: 2,
    width: '100%',
    backgroundColor: '#ccc',
    elevation: 1,
  },
  paymentProgressBarText: {
    elevation: 2,
    color: '#555',
  },
  paymentProgressBarCircle: {
    position: 'absolute',
    top: '18%',
    left: '85%',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#222',
    elevation: 3,
    opacity: 0.7,
  },
});

export default styles;
