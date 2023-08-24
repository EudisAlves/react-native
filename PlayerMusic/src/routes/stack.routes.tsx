import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';

const { Screen, Navigator} = createNativeStackNavigator();

import { Home } from '../screens/home/Home';
import { Loading } from '../screens/load/Loading';


export function StackRoutes() {
    return (
        <Navigator>

            <Screen
                name='Loading'
                options={{//para esconder o nome do componente
                    headerShown: false,
                }}
                component={Loading}
            />

            <Screen
                name='Home'
                options={{
                    title: 'Home Screen',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Home}
            />
            
        </Navigator>
    )
}