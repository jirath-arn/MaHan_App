import { StyleSheet } from 'react-native';
import { windowHeight } from '../../components/Dimension';


export default StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    headerText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    backgroundView: {
        justifyContent: 'center',
        height: windowHeight - 127,
    },
    backgroundIcon: {
        textAlign: 'center',
        color: '#c1c1c1',
    },
    backgroundText: {
        color: '#c1c1c1',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 7,
    },
});
