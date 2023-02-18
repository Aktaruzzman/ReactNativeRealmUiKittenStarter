import { StyleSheet } from 'react-native';

export const myFlex = StyleSheet.create({
    flexRowStart: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' },
    flexRowSpace: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' },
    flexRowCenter: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' },
    flexRowEnd: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' },

    flexColumnStart: { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start' },
    flexColumnSpace: { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', alignContent: 'flex-start' },
    flexColumnCenter: { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', alignContent: 'flex-start' },
    flexColumnEnd: { flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end' },

})