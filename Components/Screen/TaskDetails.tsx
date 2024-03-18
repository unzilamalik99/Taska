import React from "react";
import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';


  export default function TaskDetails({ route }) {
    // console.log(route); 
    const { task } = route.params || { task: null };
    if (!task) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>No task data available</Text>
        </View>
      );
    }
   
    
      return (
        
        <View style={styles.container}>
          
          <Text style={styles.Text1}> {task.title}</Text>
          <View style={styles.container2}>
          <View style={{ flexDirection:'row' }}>
          <Image source={require('../Images/status.png')} style={styles.icon} />
          <Text style={{ color:'#C0C0C0',fontSize:14 }}>Status</Text>
          </View>
          <Text style={styles.detail}> {task.status}</Text>
          </View> 
          
          <View style={styles.container2}>
          <View style={{ flexDirection:'row' }}>
          <Image source={require('../Images/red-flag.png')} style={styles.icon} />
          <Text style={{ color:'#C0C0C0',fontSize:14 }}>Priority</Text>
          </View>
          <Text style={styles.detail}> {task.priority}</Text>
          </View>
          <View style={styles.container2}>
          <View style={{ flexDirection:'row' }}>
          <Image source={require('../Images/user.png')} style={styles.icon} />
          <Text style={{ color:'#C0C0C0',fontSize:14 }}>Assignee</Text>
          </View>
          <Text style={styles.detail}>{task.assignee}</Text>
          </View>
          <View style={styles.container2}>
          <View style={{ flexDirection:'row' }}>
          <Image source={require('../Images/calendar.png')} style={styles.icon} />
          <Text style={{ color:'#C0C0C0',fontSize:14 }}>Due Date</Text>
          </View>
          <Text style={styles.detail}>{task.dueDate}</Text>
          </View>
         
         
    <View style={styles.disp}>
          <View style={{ flexDirection:'row' }}>
          <Text style={{ color:'#C0C0C0',fontSize:14 }}>Description</Text>
          </View>
          <Text style={{ color:'black' }}> {task.description}</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.btn2}> Edit Task</Text>
          </TouchableOpacity>
        </View>
        
        
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor:'white'

          },
          container2: {
            padding:5,
            borderRadius:5,
            borderBottomWidth: 1,
            borderBottomColor: '#DCD4D3'
          },
      Text1: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#0000FF',
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      detail: {
        fontSize: 16,
        marginBottom: 3,
        marginLeft:35
      },
      icon: {
        marginTop:10,
        width: 24,
        height: 24,
       marginRight:10
      },
      disp:{
        marginTop:20,
      },
      btn2:{
        alignSelf:'center',
        width: '80%',
        backgroundColor: '#0000FF',
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
      marginTop: 150,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        padding:10,
      }
    });