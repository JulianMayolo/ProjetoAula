//stackRoutes.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Employees from '../pages/Employees';
import Details from '../pages/Details';

export default function StackRoutes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Tela Home', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFF', headerShown: false }
                } />
            <Stack.Screen
                name="Employees"
                component={Employees}
                options={{ title: 'Tela Employees', headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ title: 'Tela Details', headerShown: false }}
            />
        </Stack.Navigator>
    )
}