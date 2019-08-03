import React, { Component} from 'react'
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, buttonText}) => {
    return (
        <TouchableOpacity onPress={(onPress)} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf:'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,

    },
    // buttonStyle: {
    //     flex: 1,
    //     alignSelf: 'stretch',
    //     backgroundColor: '#fff',
    //     borderRadius: 3,
    //     borderWidth: 1,
    //     borderColor: '#007aff',
    //     marginLeft: 5,
    //     marginRight: 5
    // }
}

export default Button;