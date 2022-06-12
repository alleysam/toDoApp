import React from "react";
import {View,Text} from "react-native";
import style from "./Header.style";


function Header (props){

    return(
        <View style={style.header}>
            <Text style={style.text}>Yapılacaklar</Text>
            <View>
                <Text style={style.text}>{props.workNumber}</Text>
            </View>
        </View>
    );
};

export default Header;