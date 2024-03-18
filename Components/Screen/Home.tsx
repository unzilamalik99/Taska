import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import TaskList from "./TaskList";
import Filter from "./Filter";

type RootStackParamsList = {
  SignUp: undefined;
  Home: undefined;
  Login: undefined;
  TaskManagementScreen: undefined;
  AddTasks: undefined;
  TaskList: undefined;
  Filter: undefined;
};

interface Tasks {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
  status: string;
  assignee: string;
  description: string;
}

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
  route: { params?: { tasks?: Tasks[] } };
}

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
  const { tasks = [] } = route.params || {};
  const [filterVisible, setFilterVisible] = useState(false);
  const handleFilterChange = (status: any, assignee: any, priority: any) => {
    console.log('Filter changed:', status, assignee, priority);
  };

  const handleCloseFilter = () => {
    setFilterVisible(false);
  };


  const statuses = ["In Progress", "Pending", "Complete"];
  const assignees = ["Assignee 1", "Assignee 2"];
  const priorities = ["High", "Low", "Critical", "Medium"];

  return (
    <View style={styles.container}>
      <View style={styles.header1}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../Images/Logo.png')} />
          <Text style={styles.title}>Taska</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchFilterContainer}>
        <View style={styles.searchContainer}>
          <Image source={require('../Images/search.png')} style={styles.searchIcon} />
          <TextInput
            placeholder='Search for Tasks'
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>{filterVisible ? 'Close Filter' : 'Open Filter'}</Text>
        </TouchableOpacity>
      </View>
      </View>
     
      <View style={styles.taskListContainer}>
        {tasks.length === 0 ? (
          <Text style={styles.noTaskText}>No tasks available</Text>
        ) : (
          <TaskList tasks={tasks} navigation={navigation} />
        )}
      </View>
      {filterVisible && (
        <Filter 
          statuses={statuses} 
          assignees={assignees} 
          priorities={priorities} 
          onFilterChange={handleFilterChange}  
          onCloseFilter={handleCloseFilter} 
        />
      )}
      <TouchableOpacity onPress={() => navigation.navigate('AddTasks')} style={styles.createTaskButton}>
        <Image source={require('../Images/sticky-notes.png')} style={styles.createTaskIcon} />
        <Text style={styles.createTaskText}>Create New Tasks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  header: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header1: {
    backgroundColor:'#0000FF',
    padding:20,
    
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 23,
    color: 'white',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#ffff',
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoutButtonText: {
    color: '#0000FF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#68',
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  filterButton: {
    backgroundColor: '#0000FF',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  filterButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  taskListContainer: {
    flex: 1,
  },
  noTaskText: { 
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 100,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  createTaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0000FF',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical:20
  },
  createTaskIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  createTaskText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
