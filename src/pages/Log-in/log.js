//TELA DE LOG-IN

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './logStyles.js';
 
export default function Open({navigation}) {

  function ChoseScreen(){
    navigation.navigate('Chose');
  }
  function Registercreen(){
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 60 }}>
        <Image
          source={require('../../../imagens/logo.png')}
          style={{ width: 280, height: 130, borderRadius: 100, borderColor: 'white', borderWidth: 10 }}
        />
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ color: "#ffffff", fontSize: 32}}>Entrar</Text>
      </View>
      <View>
        <TextInput style={styles.caixa} placeholder="USUÁRIO" placeholderTextColor="#ccc"/>
        <TextInput style={styles.caixa} placeholder="SENHA" placeholderTextColor="#ccc"/>
      </View>
      <View style={{ width: '100%' }}>
        <TouchableOpacity>
        <Text style={{ color: "#ffffff", fontSize: 20, marginBottom: 32, marginTop: 16, marginLeft: 70, textDecorationLine: 'underline'}}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={ChoseScreen}
        style={styles.button}>
          <Text style={{ color: '#ffffff', fontSize: 24}}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ marginTop: 50 }} onPress={Registercreen}>
          <Text style={{ color: '#ffffff', fontSize: 20, textDecorationLine: 'underline'}}>Não possui cadastro?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}