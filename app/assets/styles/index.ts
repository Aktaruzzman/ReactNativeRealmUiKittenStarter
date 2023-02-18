import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
  reportLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  boxLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    padding: 3,
  },
  gridItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'stretch'
  },
  gridItemLabel: {
    width: '50%',
  },
});
