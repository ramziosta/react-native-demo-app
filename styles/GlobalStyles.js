import {StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
       backgroundColor:'#333'
    },

    texts:{
        marginTop: 50,
        padding: 40,
        fontSize: 32,
       fontFamily: "DancingScript-Regular",
        color: 'red',
    },
    paragraph:{
        marginTop: 50,
        padding: 40,
        fontSize: 32,
        color: 'green',
        marginVertical: 8,
        lineHeight: 18,
    }
})