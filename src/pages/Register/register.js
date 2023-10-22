//TELA DE CADASTRO

import { StatusBar } from 'expo-status-bar';;
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './registerStyles';
import { AntDesign } from "@expo/vector-icons";
import { LoginScreen, ChoseScreen, homeScreen } from '../../functions/func.js';

export default function Sign({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 80, marginTop: 40, flexDirection: 'row', display: 'flex', width: '100%', alignItems: 'center' }}>

        <TouchableOpacity onPress={() =>homeScreen(navigation)}>
          <AntDesign name="left" size={32} color="white" style={{ marginLeft: 20 }} />
        </TouchableOpacity>
        
        <View style={{ paddingLeft: 60 }}>
          <Text style={{ color: "#ffffff", fontSize: 32}}>CADASTRAR</Text>
        </View>

      </View>

      <View>
        <TextInput style={styles.caixa} placeholder="NOME" placeholderTextColor="#ccc" />
        <TextInput style={styles.caixa} placeholder="E-MAIL" placeholderTextColor="#ccc" />
        <TextInput style={styles.caixa} placeholder="SENHA" placeholderTextColor="#ccc" />
        <TextInput style={styles.caixa} placeholder="CONFIRMAR SENHA" placeholderTextColor="#ccc" />
      </View>
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity onPress={() =>ChoseScreen(navigation)}
          style={styles.button}>
          <Text style={{ color: '#ffffff', fontSize: 24 }}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ color: '#ffffff', fontSize: 20 }}>Já Possui uma conta?</Text>
        <TouchableOpacity onPress={() =>LoginScreen(navigation)}>
          <Text style={{ color: '#ffffff', fontSize: 20, textDecorationLine: 'underline' }}> Fazer login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
