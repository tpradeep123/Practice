import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStrings from "../Constant/NavigationStrings";
import { Home, Screen1 ,Screen2 , Screen3, Screen4, Screen5, Screen6 } from "../Screens";
import Screen7 from "../Screens/Screen7/Screen7";
import Screen6a from "../Screens/Screen6/Screen6a";
import Screen8 from "../Screens/Screen8/Screen8";

const Stack = createNativeStackNavigator()

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name={NavigationStrings.HOME} component={Home}/>
                <Stack.Screen name={NavigationStrings.SCREEN1} component={Screen1}/>
                <Stack.Screen name={NavigationStrings.SCREEN2} component={Screen2}/>
                <Stack.Screen name={NavigationStrings.SCREEN3} component={Screen3}/>
                <Stack.Screen name={NavigationStrings.SCREEN4} component={Screen4}/>
                <Stack.Screen name={NavigationStrings.SCREEN5} component={Screen5}/>
                <Stack.Screen name={NavigationStrings.SCREEN6} component={Screen6}/>
                <Stack.Screen name={NavigationStrings.SCREEN7} component={Screen7}/>
                <Stack.Screen name={NavigationStrings.SCREEN6A} component={Screen6a}/>
                <Stack.Screen name={NavigationStrings.SCREEN8} component={Screen8}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes