import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigIn from '../pages/SigIn/SigIn'
import MarcaPonto from '../pages/MarcaPonto/marcaPonto'
import ajustarPonto from '../pages/ajustarPonto/ajustarPonto'
import historicoPonto from '../pages/HistoricoPontos/HistoricoPontos';
import humor from '../pages/humor/humor';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="SigIn" 
        component={SigIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MarcaPonto" 
        component={MarcaPonto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ajustarPonto" 
        component={ajustarPonto}
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
    </Stack.Navigator>
  )
}
