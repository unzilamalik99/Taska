import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {  createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./Screen/SplashScreen";
import Login from "./Screen/Login";
import SignUp from "./Screen/SignUp";
import Home from "./Screen/Home";
import AddTasks from "./Screen/AddTasks";
import TaskList from './Screen/TaskList';
import TaskDetails from "./Screen/TaskDetails"; 
import Filter from "./Screen/Filter";
import Hello from "./Screen/Hello";
type AppNavigatorProps = {};

const Stack = createStackNavigator();

export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  TaskManagementScreen: undefined;
  AddTasks: undefined;
  TaskList: undefined;
  TaskDetails:undefined;
  Filter:undefined;
  Hello:undefined;
};
interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
  status: string;
  assignee: string;
  description: string;
}

const AppNavigator: React.FC<AppNavigatorProps> = () => {



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
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home">
          {(props) => <Home {...props}  />}
        </Stack.Screen>
        <Stack.Screen name="AddTasks" component={AddTasks} />
        <Stack.Screen name="TaskList">
          {(props) => <TaskList   {...props} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
     <Stack.Screen name="Hello" component={Hello} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
