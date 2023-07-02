import { StyleSheet } from "react-native";

const ProductListStyles = StyleSheet.create({

    inputsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    aviso:{
        marginLeft: 5,
        fontSize: 11,
        color:'red',
    },

    texto: {
        marginBottom: 5,
        fontSize: 20,
        padding: 6, 
        borderTopWidth: 3,
        borderTopColor: '#2a7efd',
    },
    input: {
        height: 40,
        width: 90,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#555555',
        marginLeft: 10,
        paddingHorizontal: 9,
        backgroundColor: '#fff'
    },
    totalText: {
        fontSize: 18,
        fontFamily: 'Inter-Black',
    },

    buttonContainer: {
        width: 190,
        marginTop: 15, 
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000', 
        overflow: 'hidden',
      },
});

export default ProductListStyles;