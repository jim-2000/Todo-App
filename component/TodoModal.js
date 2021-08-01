//  packages
import React, { useState } from 'react'
// style 
import { StyleSheet, Platform,
     Text, View,SafeAreaView,
     TouchableOpacity, FlatList,
     KeyboardAvoidingView, 
     TextInput,
     Keyboard
 }from 'react-native'
// Icon colors 
import COLORS from '../colors/Colors'; '../colors/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';




//
export default function TodoModal({list,closeModal,updaTodo}) {
    // state 
    const [NewTodo, setNewTodo] = useState("");
    //
    const taskCount = list.todos.length;
    //
    const completedCount = list.todos.filter(todo => todo.completed).length;
    // 
    // just toggling true or false
    const toggleTodoComplete = index=>{
        
      const complete=   list.todos[index].completed =  !list.todos[index].completed ;
      // send this toggle variabel as function peramiter 
      updaTodo(complete);
    }

 
//Adding new todos 

const  addNewTodo = () =>{
    list.todos.push({
        title:NewTodo,completed:false
    })
    updaTodo(list);
    setNewTodo("");
    Keyboard.dismiss();
}


//
const RenderTodos =(todo,index)=>{
    return (
        <View style={styles.todoContainer}>
            <TouchableOpacity onPress={()=>toggleTodoComplete(index)}>
                 <Icon  name={todo.completed ? 'check-square' : 'square'} size={24} color={todo.completed ? list.color : COLORS.black} style={{width:32}} />
            </TouchableOpacity>
            <Text style={[styles.todo,
                {color: todo.completed ? COLORS.gray  : COLORS.black, textDecorationLine: todo.completed ? 'line-through': 'none'}]} >{todo.title}</Text>
        </View>
    )
}






    //
    return (
        <KeyboardAvoidingView style={{flex:1}}
        behavior={(Platform.OS === 'ios') ? "padding" : null} enabled>
            

            <SafeAreaView style={styles.container}>
                <TouchableOpacity 
                style={{ position:'absolute',top:64,right:32,zIndex:10}}
                onPress={closeModal}
                >
                        <Icon  name="close" size={24} color={COLORS.black} />
                </TouchableOpacity>

                <View style={[styles.section,styles.header,{borderBottomColor:list.color}]}>
                    <View>
                        <Text style={styles.title}>{list.name}</Text>
                        <Text style={styles.taskcount}>{completedCount} of {taskCount} task </Text>
                    </View>
                </View>
                <View style={[styles.section,{flex:3}]}>
                    <FlatList 
                    data={list.todos}
                    renderItem={({item,index})=> RenderTodos(item,index)  }
                    keyExtractor={item => item.title}
                    contentContainerStyle={{paddingHorizontal:32,paddingVertical:64}}
                    showsVerticalScrollIndicator={false}
                    />
                </View>


                <View  style={[styles.section,styles.footer]} >
                
                    <TextInput placeholder="add your todo" style={[styles.input,{borderColor:list.color}]} onChangeText={e=>setNewTodo(e)} value={NewTodo} />
                    <TouchableOpacity style={[styles.addTodo, {backgroundColor:list.color}]} onPress={addNewTodo}>
                        <Icon  name="plus" size={16} color={COLORS.white} />
                    </TouchableOpacity>
                </View >       
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'    
    },
    section:{
        flex:1,
        alignSelf:'stretch',
    },
    header:{
        justifyContent:'flex-end',
        marginLeft:64,
        borderBottomWidth:3,
    },
    title:{
        fontSize:30,
        fontWeight:'800',
        color:COLORS.black,
        textTransform:'uppercase'
    },
    taskCount:{
        marginTop:4,
        marginBottom:16,
        color:COLORS.gray,
        fontWeight:'600'
    },
    footer:{
        paddingHorizontal:32,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        flex:1,
        height:48,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:6,
        marginRight:8,
        paddingHorizontal:8,
    },
    addTodo:{
        borderRadius:4,
        padding:16,
        alignItems:'center',
        justifyContent:'center'
    },
    todoContainer:{
        paddingVertical:16,
        flexDirection:'row'
    },
    todo:{
        color:COLORS.black,
        fontWeight:"700",
        fontSize:16

    }

})
