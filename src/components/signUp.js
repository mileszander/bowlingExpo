// import MainHeader from './header.js'
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';



const UserSignUp = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.titleStyle}>List of Players</Text>
            </View>
            <View style={{flex:2}}>
            {props.users.map(user => {
                return (
                    <Text style={styles.item} key={user}>{user}</Text>
                )
            }) 
            }

            </View>
            <View style={styles.inputStyle}>
                <Input onChangeText={(text) => props.handleChange(text)}
                placeholder= 'Username'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    />
                }
                />
            <View  style={{flex: 1}}>
                <Button type="outline" style={styles.userButton}
                title="Submit User"
                onPress={()=> {
                    props.handleSubmit()
                 }}
                 />
            </View>
            </View>
            <View style={{flex:1}}>
            <Button style={styles.procButton}
            title="Go Bowl!"
            onPress={()=> {
                props.nextPage()
            }}/>
            </View>
        </View>


    );
    
}

const styles = {
    container : {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EDD096',
        flex: 1,
        flexDirection: 'column',

    },
    listStyle : {
        flex: 2
    },
    titleStyle : {
        color: '#F0EBDF',
        fontSize: 28,
        height: 60,
        fontWeight: 'bold',
        paddingTop: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2 },
        shadowOpacity: 0.2,
        flex: 1
    },
    inputStyle : {
        flex: 1,
        width: 300
    },
    userButton : {
        alignItems: 'center',
        paddingTop: 10,
        // width: 150,
        backgroundColor: '#EDD096',
        color: '#F0EBDF',
    },
    procButton: {
        paddingTop: 50,
        width: 300,
    },
    item: {
        paddingTop: 10,
        fontSize: 18,
    }
}

export default UserSignUp;