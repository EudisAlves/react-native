import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    statebar: {
        marginTop: 40,
    },
    titlebox: {
        flexDirection:'row',
        backgroundColor: 'transparent',
        padding: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ff0000', 
    },
    text: {
        color: '#fff',
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center',
        padding: 20,
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 100,
    }

});

export default styles;