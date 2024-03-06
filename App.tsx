import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import theme from './src/styles/theme';
import Ola from './src/components/Ola/Ola'
import Imc from './src/components/Imc/Imc'
import CalculadoraImc from './src/components/Imc/Imc';

export default function App() 
{ 
  const[nome,setNome] = useState<string>('');
  const[idade,setIdade] = useState<number>(0);
  // const[peso,setPeso] = useState<string>('0.0');
  // const[altura,setAltura] = useState<string>('0.0');
  // const[IMC,setIMC] = useState<number>(0.0);

//sintaxe const[parametro1,parmetro2]
//parametro1 nome da variavel armazenar um valor/objeto
//parametro2 função que seta o valor no parametro1 

  
function ValidarIdade(){

  if (idade <18)
  alert("Você é menor de idade");
  else
  alert("Você é maior de idade");
  }




  return (
      <View style={styles.container}>

      

        <Text>Seja bem vindo !!</Text>
        <TextInput style ={styles.text}
        placeholder='Digite seu nome'
        onChangeText={(TxtNome) => {setNome(TxtNome)
        console.log(nome)}}
        />
        <Text> Olá {nome}</Text>
        <TextInput style ={styles.text}
        placeholder='Digite sua idade'
        onChangeText={(TxtIdade) => setIdade(parseInt(TxtIdade))}
        keyboardType='numeric'
        />
         <Text> Idade {idade}</Text>
        
      
          <TouchableOpacity 
          style={styles.button}
          onPress={ValidarIdade}>
            <Text>Validar Idade</Text> 

          </TouchableOpacity>
          
      
         <CalculadoraImc nomeProps='' />

         <Ola nomeProps=''/>



      
        <StatusBar style="auto" />
{/* 
          <Text>Para calcular seu IMC, digite as informções abaixo: </Text>
          <TextInput 
          style ={styles.text}
          placeholder='Peso (Em Kilo)'
          onChangeText={(TxtPeso) => setPeso(TxtPeso)}
          keyboardType='default'
          />

          <TextInput 
          style ={styles.text}
          placeholder='Altura (Em Metros)'
          onChangeText={(TxtAltura) => setAltura(TxtAltura)}
          keyboardType='default'
          />


          
          <TouchableOpacity style={styles.button}
          onPress={CalcularIMC}>
            <Text>Calcular IMC</Text> 
          </TouchableOpacity> */}
          
       
          



      </View>
    );
}

const styles = StyleSheet.create({
  container: {

    marginTop : 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12   
  },

  text: {
    padding: 5.25,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },

  button:{
    padding: 5,
    color: "red"
  }
});