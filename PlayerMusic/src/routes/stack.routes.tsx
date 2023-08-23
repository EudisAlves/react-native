import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';

const { Screen, Navigator} = createNativeStackNavigator();

import { Home } from '../screens/home/Home';
import { Loading } from '../screens/load/Loading';


export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name='Loading'
                component={Loading}
            />
        </Navigator>
    )
}