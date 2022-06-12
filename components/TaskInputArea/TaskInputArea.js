import React from "react";
import {Button,View,TextInput} from "react-native";
import style from "./TaskInputArea.style";

const TaskInputArea = (props) => {
    return(
        <View style={style.inputContainer}>
            <TextInput style={style.textInput}value={props.text}placeholder={"Görev giriniz..."} onChangeText={props.changeText}/>
            <Button color={"#ffc54d"} onPress={props.onPress} title="Ekle"/>
        </View>
    );
};

export default TaskInputArea;