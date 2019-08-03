import React from 'react';
import {View} from 'react-native';
import { Header} from 'react-native-elements';

const MainHeader = () => {
    return (
        <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Bowler Scorer', style: { color: '#fff' } }}
            //You can add this as a way to quit your game but that's later on
            // rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
}

export default MainHeader;