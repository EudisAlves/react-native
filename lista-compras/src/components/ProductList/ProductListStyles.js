import { StyleSheet } from "react-native";

const ProductListStyles = StyleSheet.create({

    inputsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 90,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#555555',
        marginLeft: 10,
        paddingHorizontal: 9,
        margin: 10,
        backgroundColor: '#fff'
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },

    buttonContainer: {
        width: 190,
        marginTop: 50, 
        borderRadius: 10,
        overflow: 'hidden', 
      },
});

export default ProductListStyles;