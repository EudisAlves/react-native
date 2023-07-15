import { View, Text } from "react-native";
import styles from './style'



export default function Title() {
    return (
        <View style={styles.titlebox}>
            <Text style={styles.text}>Calc Temp</Text>
        </View>
    );
}


