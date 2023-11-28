import { Image,Button,View,Text, SafeAreaView, StyleSheet } from 'react-native';
import Picker from '@react-native-picker/picker';
import TelaInicial from './Inicial'
import TelaOne from './TelaOne'
import { Ionicons } from '@expo/vector-icons';
import TelaTwo from './TelaTwo'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" 
        screenOptions={({ route }) => ({
          tabBarStyle:{
            position: 'absolute',
            backgroundColor: '#0C0C30',
            height: 55,
            
            headerShown: false,
          },
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'EletroApp') {
              iconName = focused ? 'home'
              : 'home-outline';}

            if (route.name === 'Cores') {
              iconName = focused
                ? 'flash'
                : 'flash-outline';
            } else if (route.name === 'Valor') {
              iconName = focused? 
              'keypad'
                : 'keypad-outline';}

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3836FF',
          tabBarInactiveTintColor: '#FFFBF2',
        }
        )}
      >
        <Tab.Screen 
          name="EletroApp" 
          component={TelaInicial}
          options={{
            
          }}
        />

        <Tab.Screen 
          name="Cores" 
          component={TelaOne} 
          options={{
            
          }}
        />
        
       <Tab.Screen 
          name="Valor" 
          component={TelaTwo}
          options={{

        }}
       />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;