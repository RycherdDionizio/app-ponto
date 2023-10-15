import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigIn from '../pages/SigIn/SigIn'
import Wellcome from '../pages/Wellcome/Wellcome';
import HomePage from '../pages/HomePage/HomePage';
import MarcaPonto from '../pages/MarcaPonto/marcaPonto'
import AjustarPonto from '../pages/ajustarPonto/ajustarPonto'
import historicoPonto from '../pages/HistoricoPontos/HistoricoPontos';
import Indicadores from '../pages/Indicadores/Indicadores';
import DadosCadastrais from '../pages/DadosCadastrais/DadosCadastrais';
import RegistrarPonto from '../pages/RegistrarPonto/RegistrarPonto';
import humor from '../pages/humor/humor';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wellcome" 
        component={Wellcome}
        options={{ headerShown: false }}
      />

        <Stack.Screen
        name="SigIn" 
        component={SigIn}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MarcaPonto" 
        component={MarcaPonto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AjustarPonto" 
        component={AjustarPonto}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="historicoPonto" 
        component={historicoPonto}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="humor" 
        component={humor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegistrarPonto" 
        component={RegistrarPonto}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Indicadores" 
        component={Indicadores}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DadosCadastrais" 
        component={DadosCadastrais}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
