import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import ScreenInfo from '../screens/Info/InfoScreen';

const Stack = createStackNavigator();

export const InfoStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Información >" component={ScreenInfo} />
        </Stack.Navigator>
    )
}