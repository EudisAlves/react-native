import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      somaProdutos: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
      },
   
    input: {
        height: 30,
        width: 90,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 10,
        paddingHorizontal: 5,
        backgroundColor: 'lightgray',
        marginVertical: 5,
    },
});

export default styles
