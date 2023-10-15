import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image,
         View,
         Text,
         StyleSheet,
         TextInput,
         TouchableOpacity
        } from 'react-native';

export default function App() {

  const navigation = useNavigation();
  const systemUsers = [
    ['gabriel.ajala@grupo-eagle.com', '12345678'],
    ['rycherd.dionizio@grupo-eagle.com', '12345678']
  ]

  return (
    <View style={styles.container}>
      <View style={styles.containerSigin}>
        <View style={styles.containerLogo}>
          <Image
            source={require('../../../assets/Logomarca_Futuro_azul.png')}
            style={styles.logoImage}
            />
              <Text style={styles.sloganText}>
                Central do Colaborador
              </Text>
        </View>

        <View style={styles.containerInputs}>

          <Text style={styles.loginText}>E-mail:</Text>
                  <TextInput
                    keyboardType={"email-address"}
                    editable
                    placeholder="seu.email@dominio.com"
                    numberOfLines={2}
                    style={styles.loginInput}/>

          <Text style={styles.loginText}>Senha:</Text>
                  <TextInput
                    secureTextEntry={true}
                    editable
                    placeholder="********"
                    numberOfLines={2}
                    style={styles.loginInput}/>

        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HomePage')}
              >
              <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#132F48",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  containerSigin: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: "80%",
    minHeight: 600,
    alignItems: "center",
    borderRadius: 20
  },

  containerLogo:{
    marginTop: "10%",
    width: "80%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center"
},

logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'center',
  },

  sloganText: {
    color:"#132F48", 
    fontSize: 20,  
    padding:5,
    paddingLeft: 20,
    width:"90%",
    textAlign: "center"
  },

  containerInputs: {
    width: "90%",
    height: "40%"
  },

  loginText: {
    marginTop: "10%",
    color: "#132F48",
    fontSize: 20
  },

  loginInput: {
    marginTop: "2%",
    fontSize: 20,
    borderEndWidth : 1,
    borderBottomWidth : 1,
    borderColor: "#132F48"
  },

  containerButton: {
    marginTop: 50,
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    backgroundColor: "#132F48",
    width: "90%",
    alignItems: "center",
    borderRadius: 5
  },

  textButton: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  }
});
