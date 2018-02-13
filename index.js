import React from 'react';
import { Text, View, Image, AppRegistry } from 'react-native';

//formatações
const Estilos = {
    principal: {
        backgroundColor: '#538530',
        flex: 1
    }
};

const botaoPressionado = () => {

}

//criar o componente
const App = () => {
    const { principal } = Estilos;
    return (
        <View style={principal}>
            <Image source={ require() } />
        </View>
    );
};

AppRegistry.registerComponent('FrasesDoDia', () => App);