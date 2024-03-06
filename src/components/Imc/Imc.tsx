import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button , Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface ImcProps {
    nomeProps:string
}

const CalculadoraImc : React.FC<ImcProps> = ({nomeProps}) => {

    // const [peso, setPeso] = useState<string>('0.0');
    // const [altura, setAltura] = useState<string>('0.0');
    const[IMC,setIMC] = useState<number>(0.0);
    const [ValorIMC,setValorIMC] = useState<string>();
    const [peso, setPeso] = useState<string>('0.0');
    const [altura, setAltura] = useState<string>('0.0');
    const pesoConvertido = parseFloat(peso.replace(/,/g, "."));
    const alturaConvertida = parseFloat(altura.replace(/,/g, "."));



function CalcularIMC() {
  
    if (pesoConvertido != 0.0 && alturaConvertida != 0.0) {
      try 
          {
            const alturaQuadrado = Math.pow (2.0,alturaConvertida);
            const calculoIMC = pesoConvertido/alturaQuadrado;
            setIMC(calculoIMC);
  
            alert(calculoIMC);
            if(calculoIMC < 18.5) {
              setValorIMC("Baixo Peso");
              
            } else if (calculoIMC < 25) {
                setValorIMC("Peso adequado");
            }
            else if (calculoIMC < 30) {
                setValorIMC("Sobrepeso");
            }
            else if (calculoIMC<35) {
                setValorIMC("Obesidade Grau 1 ");
            }
            else if (calculoIMC < 41 ) {
                setValorIMC("Obesidade Grau 2 ");
            }
            else{
                setValorIMC("Obesidade Grau 3 ");
            }
  
          } 
      catch (error) 
          {
            alert("Error")
          }
    }
    else {
      alert("Valores incorretos")
    }
  }

    return (
    <View style={styles.container}>

<Text>Para calcular seu IMC, digite as informções abaixo: </Text>

          <TextInput 
         
          placeholder='Peso (Em Kilo)'
          onChangeText={(TxtPeso) => setPeso(TxtPeso)}
          keyboardType='default'
          />

          <TextInput 
         
          placeholder='Altura (Em Metros)'
          onChangeText={(TxtAltura) => setAltura(TxtAltura)}
          keyboardType='default'
          />


          
          <TouchableOpacity 
          onPress={CalcularIMC}>
            <Text>Calcular IMC</Text> 
          </TouchableOpacity> 
        <Text>{ValorIMC}</Text>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop : 10,
      backgroundColor: '#fff',
       gap: 12
    },
    greeting: {
      fontSize: 30,
      fontWeight: 'bold',
      margin: 16,
    },
  });
  
  export default CalculadoraImc;