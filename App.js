/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *

 */

import React,{useState,useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
} from 'react-native';
// color icon and more ui 
import COLORS from './colors/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
// temp data  & components 
import tempData from './data/tempData'
// components
import Todo from './component/Todo'
import AddTodoModal from './component/AddTodoModal';
//firebase
import Fire from './fire'




// starting code 
const App = () => {
// all state is hare 
  const [addTodoVisiable, setAddTodoVisiable] = useState(false)
  const [List, setList] = useState(tempData)

// logical function is hare 

useEffect(() => {
 firebase = new Fire();
}, )


const toggleAddTodoModal = () => setAddTodoVisiable(previousState => !previousState);

// render list just return it 
const  renderList = list=>{
  return <Todo list={list} updaTodo={updaTodo} />;
}

// Adding todo 
const addList = list =>{
  // old List spread and new list add also the id is todo length +1 
 setList([...List,{...list,id:List.length+1,todos:[]}])
}
// update todo

const  updaTodo = list =>{

  setList(
    List.map(item => {
     return item.id === list.id ? list : item;
    })
  );
}
// if (item.id === list) {
//   item.completed = !item.completed;
// }
// return item;

//
  return (
 
      <View style={styles.container}>
        {/* adding modal  */}
          <Modal animationType="slide"
         
           visible={addTodoVisiable} 
           onRequestClose={toggleAddTodoModal}>         
              <AddTodoModal closemodel={toggleAddTodoModal}
               addList={addList}  />          
          </Modal>

        {/* appp main bar  */}
        <View style={{flexDirection:'row'}}>
            <View style={styles.divider} />
            <Text style={styles.title}>
              Todo<Text style={{fontWeight:'300',color:COLORS.blue}}>List</Text>
            </Text>
            <View style={styles.divider} />
        </View>
   {/* somethig is okay */}
        <View style={{marginVertical:48}}>
          <TouchableOpacity style={styles.addList} onPress={toggleAddTodoModal}>
              <Icon name="plus" size={16} color={COLORS.blue} />
          </TouchableOpacity>   
          <Text style={styles.add}>Add List</Text>     
        </View>
        {/* flatlist adding  */}
        <View style={{height:275,paddingLeft:32}}>
          <FlatList 
          data={List} 
          keyExtractor={item=>item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=> renderList(item)  }
          keyboardShouldPersistTaps="always"
          /> 
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:'center'
  } ,
  divider:{
    backgroundColor:COLORS.lightblue,
    height:1,
    flex:1,
    alignSelf:'center',
  } ,
  title:{
    fontSize:38,
    fontWeight:'800',
    color:COLORS.black,
    paddingHorizontal:64,
  },
  addList:{
    borderWidth:2,
    borderColor:COLORS.lightblue,
    borderRadius:4,
    padding:16,
    alignItems:'center',
    justifyContent:'center',
  },
  add:{
    color:COLORS.blue,
    fontWeight:"600",
    fontSize:14,
    marginTop:8,
  }


});

export default App;
