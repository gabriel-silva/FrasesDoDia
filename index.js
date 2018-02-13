import React from 'react';
import {
    Text,
    View,
    Image,
    AppRegistry,
    TouchableOpacity,
    Alert
} from 'react-native';

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

const gerarNovaFrase = () => {
    var numeroAletorio = Math.random();
    numeroAletorio = Math.floor(numeroAletorio * 5);

    var frases = Array();
    frases[0] = 'aa';
    frases[1] = 'bb';
    frases[2] = 'cc';
    frases[3] = 'dd';
    frases[4] = 'ee';

    var fraseEscolhida = frases[numeroAletorio];

    Alert.alert(fraseEscolhida);
};

//criar o componente
const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return (
        <View style={principal}>

            <Image source={require('./imgs/uvas.png')} />

            <TouchableOpacity
                onPress={gerarNovaFrase}
                style={botao}
            >
                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>

        </View>
    );
};

AppRegistry.registerComponent('FrasesDoDia', () => App);
