import React from 'react';
import {View, Text, Image} from 'react-native';
import { Button} from 'react-native-elements';

// import Button from './button'

const GoBowl = (props) => {
    return (
        <View style={styles.container} >
            <View>
            <Text style={styles.titleStyle} >Bowler Scorer!</Text>
            </View>
            <View>
            <Image style={styles.imgStyles}source={require('./bowlingPin.png')} />
            </View>
            <View>
            <Button style={styles.procButton}
            title="Go Bowl!"
            onPress={()=> {
                props.nextPage()
            }}/>
    
            {/* <Button style={styles.procButton} buttonText={'Bowl Now!'}
                onPress={()=> {
                    
                }}/> */}
            </View>


        </View>
    );
}

const styles = {
    container : {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#EDD096'
    },
    imgStyle: {
        alignSelf: 'stretch',
        textAlign: 'center',

    },
    titleStyle : {
        color: '#F0EBDF',
        fontSize: 28,
        height: 60,
        fontWeight: 'bold',
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    procButton: {
        width: 200,
    }
}

export default GoBowl;