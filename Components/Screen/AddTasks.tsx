import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'; 
import { Picker } from '@react-native-picker/picker';
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
  AddTask: undefined;
};

interface AddTaskScreenNavigationProp {
  navigate(arg0: string, arg1: { tasks: Task[]; }): unknown;
  navigation: StackNavigationProp<RootStackParamsList, 'AddTask'>;
}

const AddTask: React.FC<{ navigation: AddTaskScreenNavigationProp }> = ({ navigation }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: "",
    dueDate: "",
    priority: "",
    status: "",
    assignee: "",
    description: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(false); 

  const addTask = () => {

    if (
      newTask.title.trim() !== "" &&
      newTask.dueDate.trim() !== "" &&
      newTask.priority.trim() !== "" &&
      newTask.status.trim() !== "" &&
      newTask.assignee.trim() !== "" &&
      newTask.description.trim() !== ""
    ) {
 
      const newTaskWithId = {
        ...newTask,
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1 
      };
  
    
      const updatedTasks = [...tasks, newTaskWithId];
  
      setTasks(updatedTasks);
  
      
      setNewTask({
        id: 0,
        title: "",
        dueDate: "",
        priority: "",
        status: "",
        assignee: "",
        description: ""
      });
  
      navigation.navigate("Home", { tasks: updatedTasks });
    } else {
    
      alert("Please fill in all fields.");
    }
  };
  
  
  
  
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
      <View style={styles.inputContainer}>
  <Text style={styles.label}>Title</Text>
  <TextInput
    style={styles.input}
    placeholder="Title"
    value={newTask.title}
    onChangeText={(text) => setNewTask({ ...newTask, title: text })}
  />

  <Text style={styles.label}>Due Date</Text>
  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
    <Text style={styles.input}>{newTask.dueDate || 'Select Due Date'}</Text>
  </TouchableOpacity>
  {showDatePicker && (
    <DateTimePicker
      value={newTask.dueDate ? new Date(newTask.dueDate) : new Date()}
      mode="date"
      display="default"
      onChange={(event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
          setNewTask({ ...newTask, dueDate: selectedDate.toISOString().split('T')[0] });
        }
      }}
    />
  )}

  <Text style={styles.label}>Priority</Text>
  <Picker
    selectedValue={newTask.priority}
    onValueChange={(itemValue: any) => setNewTask({ ...newTask, priority: itemValue })}
    itemStyle={styles.pickerItem}
  >
    <Picker.Item label="Select" value="" />
    <Picker.Item label="Low" value="Low" />
    <Picker.Item label="Medium" value="Medium" />
    <Picker.Item label="High" value="High" />
  </Picker>

  <Text style={styles.label}>Status</Text>
  <Picker
    selectedValue={newTask.status}
    onValueChange={(itemValue: any) => setNewTask({ ...newTask, status: itemValue })}
    itemStyle={styles.pickerItem}
  >
    <Picker.Item label="Select" value="" />
    <Picker.Item label="Progress" value="progress" />
    <Picker.Item label="In Progress" value="In Progress" />
    <Picker.Item label="Complete" value="complete" />
  </Picker>

  <Text style={styles.label}>Assignee</Text>
  <Picker
    selectedValue={newTask.assignee}
    onValueChange={(itemValue: any) => setNewTask({ ...newTask, assignee: itemValue })}
    itemStyle={styles.pickerItem}
  >
    <Picker.Item label="Select" value="" />
    <Picker.Item label="Assignee 1" value="assignee1" />
    <Picker.Item label="Assignee 2" value="assignee2" />
  </Picker>

  <Text style={styles.label}>Description</Text>
  <TextInput
    style={styles.input}
    placeholder="Description"
    value={newTask.description}
    onChangeText={(text) => setNewTask({ ...newTask, description: text })}
  />

  <TouchableOpacity style={styles.btn} onPress={addTask}>
    <Text style={styles.btnText}>Create Task</Text>
  </TouchableOpacity>
</View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5', 
    padding: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    height: 50,
    color: '#000',
  },
  btn: {
    width: '100%',
    backgroundColor: '#0000FF',
    color: 'white',
    height: 55,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    flexDirection: 'row',
  },
  label: {
    marginVertical: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  pickerItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  }
});

export default AddTask;
