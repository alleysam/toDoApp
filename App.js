import React, {useEffect,useState} from 'react';
import {View,StyleSheet,FlatList} from "react-native";
import Header from './components/Header/Header';
import TaskBox from './components/TaskBox/TaskBox';
import TaskInputArea from './components/TaskInputArea/TaskInputArea';

const App = () => {
  const [text,setText] = useState("");
  const changeText = (text) => setText(text);


  const [list, setList] = useState([]);

  const[workNum, setWorkNum] = useState(0);

  const addWork = () => {
    if(text==="" || text===" ")
    {
      alert("Lütfen Geçerli Bir Görev Giriniz...");
    }
    else{
    console.log("çalıştı")
    setList([...list,text]);
    }
  };
  
  useEffect(() => setWorkNum(list.length),[list]);

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }



  return(
    <>
      <View style={styles.container}>
        <Header workNumber={workNum}/>
        <FlatList data={list} renderItem={({item, index}) => <TaskBox longPress={() => deleteItem(index)} work={item}/>} />

      </View>
      <TaskInputArea onPress={addWork} text={text} changeText={changeText}/>
    </>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#06283d",
  },
});



export default App;