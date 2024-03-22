import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
  status: string;
  assignee: string;
  description: string;
}

type RootStackParamsList = {
  TaskDetails: { task: Task }; 

};

interface TaskListProps {
  tasks: Task[];
  navigation: StackNavigationProp<RootStackParamsList, 'TaskDetails'>; 

}

const TaskList: React.FC<TaskListProps> = ({ navigation, tasks }) => {
  const renderTaskItem = ({ item, index }: { item: Task; index: number }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TaskDetails', { task: item })} style={[styles.taskItem, index % 2 === 0 ? styles.evenTaskItem : styles.oddTaskItem]}>
      <View style={styles.taskInfo}>
      <Text style={styles.status}> {item.status}</Text>
      <View style={{ flexDirection: 'row', }}>
      <Image style={styles.logo} source={require('../Images/red-flag.png')} />

<Text style={styles.priority}> {item.priority}</Text>
      </View>
      
      </View>
        
      <Text style={styles.taskTitle}> {item.title}</Text>
      <Text style={styles.description}> {item.description}</Text>
      <View style={styles.taskInfo2}>
        <View style={{ flexDirection: 'row', }}>
        <Image style={styles.logo} source={require('../Images/user.png')} />

        <Text style={styles.assignee}> {item.assignee}</Text>
        </View>
        
        <View style={{ flexDirection: 'row', }}>
        <Image style={styles.logo} source={require('../Images/calendar.png')} />

        <Text style={styles.dueDate}> {item.dueDate}</Text>
        </View>
       
      </View>
      
     
      <View style={styles.detailsButton}>
        <Text style={styles.btnText}>Task Details</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.taskListContainer}>
      <Text style={styles.header}>Task List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskListContainer: {
    marginBottom: 5,
    zIndex: 1
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    paddingHorizontal: 16,
  },
  taskItem: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  evenTaskItem: {
    backgroundColor: '#F0F0F0',
  },
  oddTaskItem: {
    backgroundColor: '#D5D8DC',
  },
  taskTitle: {
    color:'blue',
    fontSize: 22,
    fontWeight: 'bold',
  },
  detailsButton: {
    backgroundColor: '#0000FF',
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    marginBottom: 5,
    borderWidth:1,
    borderColor:'green',
    borderRadius:5,
    width:100,
    padding:3,
    color:'green',
  },
  priority: {
    fontSize: 16,
    marginBottom: 5,
    borderRadius:5,
    padding:3,
    color:'red',
  alignSelf:'flex-end',
 
  },
  taskInfo:{
flexDirection:'row',
justifyContent:'space-between'
  },
  taskInfo2:{
  alignSelf:'flex-end',
    justifyContent:'space-between',
    marginBottom:5
  },
  dueDate: {
    fontSize: 16,
    marginBottom: 2,
    color:'blue',
  },
  assignee: {
    fontSize: 16,
    marginBottom: 3,
    color:'gray',
  },
  description: {
    fontSize: 16,
    marginBottom: 2,
  },
  logo:{
    width: 20,
    height: 20,
   
  }
});

export default TaskList;
