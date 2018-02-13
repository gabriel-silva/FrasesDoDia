import React from 'react';
import { Text, View, Image, AppRegistry, TouchableOpacity } from 'react-native';

//formatações
const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const botaoPressionado = () =>{

}

//criar o componente
const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return (
        <View style={ principal }>
            
            <Image source={ require('./imgs/uvas.png') } />
            
            <TouchableOpacity style={ botao }>
                <Text style={ textoBotao }>Nova Frase</Text>
            </TouchableOpacity>
        
        </View>
    );
};

AppRegistry.registerComponent('FrasesDoDia', () => App);