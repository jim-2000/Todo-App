import React,{useState} from 'react';
import { View,Text,StyleSheet,KeyboardAvoidingView,TouchableOpacity, TextInput } from 'react-native'
//
import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../colors/Colors'; '../colors/Colors';
// data showing 
import tempData from '../data/tempData'
// start wrighting
const AddTodoModal = ({closemodel,addList,updaTodo}) => {
    // in future i will do it dynamic colors 
    const backgroundColors = ["#2D3436","#5CD859","#24A6D9","#595BD9","#8022D9","#D159D8","#D85963","#D88559"]
    const [name, setName] = useState("")
    const [color, setColors] = useState(backgroundColors[0])
    //logic


// create todos 
const createtodos = ()=>{
  if (name) {
      const list = {name,color};
   addList(list)
    setName("");
    closemodel()
  }
};

    // Rendering all colors 
   const renderColors= ()=>{
       return backgroundColors.map(color=>{
           return (
               <TouchableOpacity key={color} 
               style={[styles.colorSelects,{backgroundColor:color}]}
               onPress={()=>setColors(color)}
               />
           )
       })
   }

    //
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding"  >
            <TouchableOpacity style={{position:'absolute',top:20,right:32}} onPress={closemodel}>
                <Icon  name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={{alignSelf:'stretch',marginHorizontal:32}}>
                
                <Text style={styles.title} >create a Todo List</Text>
                
                <TextInput placeholder="Add todo now..." 
                style={styles.addtodoinput} onChangeText={e=>setName(e)} />
                {/* Color selects */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:12}}>
                        {renderColors()}
                    </View>
                {/* button */}
                <TouchableOpacity 
                style={[styles.create,{backgroundColor:color}]}
                onPress={createtodos}
                >
                    <Text style={{color:COLORS.white,fontWeight:'600'}}>Create</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:28,
        fontWeight:'800',
        color:COLORS.black,
        alignSelf:'center'
    },
    addtodoinput:{
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:COLORS.blue,
        borderRadius:6,
        height:50,
        marginTop:8,
        paddingHorizontal:16,
        fontSize:18,
        
    },
    create:{
        marginTop:24,
        height:50,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center'
    },
    colorSelects:{
        width:30,
        height:30,
        borderRadius:4,
    }
})
export default AddTodoModal;