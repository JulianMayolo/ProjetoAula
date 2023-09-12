//ROUTES/index.js

import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';

import Home from '../pages/Home';
import Employees from '../pages/Employees';

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFF',
                tabBarStyle: {
                    backgroundColor: '#201C30',
                    borderTopWidth: 0,
                    paddingBottom: 4,
                    paddingTop: 4,
                    height: '7%',
                    width: '90%',
                    bottom: 15,
                    alignSelf: 'center',
                    borderRadius: 57,
                    elevation: 0,
                }
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={StackRoutes}

                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <AntDesign name="home" size={size} color={"#fff"} />
                        }
                        return <AntDesign name="home" size={size} color={"#898989"} />
                    }
                }}
            />
            <Tab.Screen
                name="Employees"
                component={Employees}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <AntDesign name="user" size={size} color={"#fff"} />
                        }
                        return <AntDesign name="user" size={size} color={"#898989"} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}