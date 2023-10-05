//TELA DE CADASTRO

import { StatusBar } from 'expo-status-bar';;
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Sign({navigation}) {

    function LoginScreen(){
        navigation.navigate('Login');
    }
    function ChoseScreen(){
        navigation.navigate('Chose');
    }

  return (
    <View style={styles.container}>
    <View style={{ marginBottom: 80, marginTop: 32 }}>
      <Text style={{ color: "#ffffff", fontSize: 32,  fontFamily: 'bold, sans-serif'}}>CADASTRAR</Text>
    </View>
    <View>
      <TextInput style={styles.caixa} placeholder="NOME" placeholderTextColor="#ccc"/>
      <TextInput style={styles.caixa} placeholder="E-MAIL" placeholderTextColor="#ccc"/>
      <TextInput style={styles.caixa} placeholder="SENHA" placeholderTextColor="#ccc"/>
      <TextInput style={styles.caixa} placeholder="CONFIRMAR SENHA" placeholderTextColor="#ccc"/>
    </View>
    <View style={{ width: '100%' }}>
      <Text style={{ color: "#ffffff", fontSize: 16, marginBottom: 32, marginTop: 8, marginLeft: 70, textDecorationLine: 'underline'}}></Text>
    </View>
    <View>
      <TouchableOpacity onPress={ChoseScreen}
       style={{ backgroundColor: '#1E2F44', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 10 }}>
        <Text style={{ color: '#ffffff', fontSize: 24}}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
        <Text style={{ color: '#ffffff', fontSize: 20}}>Já Possui uma conta?</Text>
      <TouchableOpacity onPress={LoginScreen}>
        <Text style={{ color: '#ffffff', fontSize: 20, textDecorationLine: 'underline'}}> Login</Text>
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" />
  </View>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008FBE',
    alignItems: 'center',
  },

  caixa: {
    backgroundColor: '#1E2F44',
    height: 60,
    color: 'white',
    marginTop: 24,
    borderRadius: 10,
    fontSize: 16,
    textAlign: 'center',
    width: 310,
  }
    });