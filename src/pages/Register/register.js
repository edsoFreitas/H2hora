//TELA DE CADASTRO

import { StatusBar } from 'expo-status-bar';;
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './registerStyles';

export default function Sign({ navigation }) {

  function LoginScreen() {
    navigation.navigate('Login');
  }
  function ChoseScreen() {
    navigation.navigate('Chose');
  }

  function homeScreen() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 80, marginTop: 40, flexDirection: 'row', display: 'flex', width: '100%', alignItems: 'center' }}>

        <TouchableOpacity onPress={homeScreen}>
        <Image
          source={require('../../imagens/voltar.png')}
          style={{ width: 35, height: 35, borderRadius: 100, marginLeft: 10 }}/>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', width: '100%', paddingRight: 100 }}>
          <Text style={{ color: "#ffffff", fontSize: 32 }}>CADASTRAR</Text>
        </View>

      </View>

      <View>
        <TextInput style={styles.caixa} placeholder="NOME" placeholderTextColor="#ccc" />
        <TextInput style={styles.caixa} placeholder="E-MAIL" placeholderTextColor="#ccc" />
        <TextInput style={styles.caixa} placeholder="SENHA" placeholderTextColor="#ccc" />
        <TextInput style={styles.caixa} placeholder="CONFIRMAR SENHA" placeholderTextColor="#ccc" />
      </View>
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity onPress={ChoseScreen}
          style={styles.button}>
          <Text style={{ color: '#ffffff', fontSize: 24 }}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ color: '#ffffff', fontSize: 20 }}>Já Possui uma conta?</Text>
        <TouchableOpacity onPress={LoginScreen}>
          <Text style={{ color: '#ffffff', fontSize: 20, textDecorationLine: 'underline' }}> Fazer login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
