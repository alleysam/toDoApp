import React from "react";
import {TouchableOpacity,View,Text} from "react-native";
import style from "./TaskBox.style";

const TaskBox = (props) =>{
    return(
        <View>
            <TouchableOpacity style={style.containerBox} onLongPress={props.longPress}>
                <Text style={style.textBox}>{props.work}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TaskBox;