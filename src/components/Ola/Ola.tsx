import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface OlaProps {
    nomeProps:string
}

const Ola : React.FC<OlaProps> = ({nomeProps}) => {

    const [contadorLikes, setContadorLikes] = useState<number>(0);

    const MaisContador = () =>  setContadorLikes(contadorLikes + 1);
    function MenosContador(){
      if(contadorLikes>0){
        setContadorLikes(contadorLikes-1);
      }
      else{
        setContadorLikes(0);
      }
   }


    return (
    <View style={styles.container}>
          <Text style={styles.greeting}>
            Olá  {nomeProps}
            seu total de é Likes {contadorLikes}
            </Text>

        <Button
          title="Like"         
          onPress={MaisContador}
          color="blue"
        />
        <Button
          title="Deslike"         
          onPress={MenosContador}
          color="red"
        />
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
  
  export default Ola;