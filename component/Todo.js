import React,{useState} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal } from 'react-native'
// colors data and components 

import TodoModal from './TodoModal';
import COLORS from '../colors/Colors'; '../colors/Colors';
const Todo = ({list,updaTodo}) => {       
    //
    const [Open, setOpen] = useState(false)
    //         
                const completedTodos = list.todos.filter(todo => todo.completed).length;
                const uncompletedTodos = list.todos.length - completedTodos;
    // logical part 
    const toggleOpen =()=>{
        setOpen(p=>!p)
    }

    //
    return (
       <View >
           <Modal animationType="slide" 
           visible={Open} 
           onRequestClose={toggleOpen}
           >
           <TodoModal list={list} closeModal={toggleOpen} updaTodo={updaTodo}/>     
           </Modal>
            <TouchableOpacity style={[styles.main ,{backgroundColor:list.color}]} key={list.name} onPress={toggleOpen} >
                <Text  style={styles.listtitle} numberOfLines={1}>{list.name}</Text>

                <View>
                        <View style={{alignItems:'center'}}>
                                <Text style={styles.count}>{uncompletedTodos}</Text>
                                <Text style={styles.subtitle}>Remaining</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                                <Text style={styles.count}>{completedTodos}</Text>        
                                <Text style={[styles.subtitle,{textDecorationLine:'line-through', }]}>completed</Text>
                        </View>
                    
                </View>
            </TouchableOpacity>
       </View>
    );
};


const styles = StyleSheet.create({
    main:{
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:6,
        marginHorizontal:12,
        alignItems:'center',
        width:200
        
    },
    listtitle:{
     fontSize:24,
     fontWeight:'700',
     color:COLORS.white,
    },
    count:{
        fontSize:48,
        fontWeight:'200',
        color:COLORS.white,

    },
    subtitle:{
        fontSize:12,
        fontWeight:"700",
        color:COLORS.white,
    }


});

export default Todo;