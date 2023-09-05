import { StyleSheet } from "react-native";

const ProductListStyles = StyleSheet.create({

    inputsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    texto: {
        marginBottom: 40,
        fontSize: 20,
        padding: 10, 
        borderTopWidth: 3,
        borderTopColor: '#020914',
    },
    input: {
        height: 40,
        width: 90,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#FD7005',
        marginLeft: 10,
        paddingHorizontal: 9,
        backgroundColor: '#fff'
    },
    totalText: {
        fontSize: 18,
        fontFamily: 'Inter-Black',
        marginTop: 10,
    },

    buttonContainer: {
        width: 190,
        marginTop: 35, 
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000', 
        overflow: 'hidden',
      },
});

export default ProductListStyles;