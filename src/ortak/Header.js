import React from "react";
import { Text, View } from 'react-native';

const Header = ({HeaderText}) => {
    const { textStyle, viewStyle } = styles;

    return(
        <View style={viewStyle}>
           <Text style={textStyle}> {HeaderText} </Text> 
        </View>  
    );
};

const styles = {
    textStyle: {
        color:"black",
        fontSize: 40
        
    },
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        shadowOffset: { widht: 0, height: 2 },
        shadowOpacity: 0.9,
        
    }
};

export default Header;