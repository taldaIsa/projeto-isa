import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TransactionScreen from "../screens/Transaction.js";
import Pesquisa from "../screens/Search.js";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
      tabBarIcon:({focused, color, size})=>{
      var icone 
    
      if(route.name == "Pesquisa"){
      icone = "search"
      }
      if(route.name == "Transação"){
      icone = "card-outline"
      }
      return(
      <Ionicons name = {icone} size = {20} color = {color}></Ionicons>
      )
      
      }
      })}tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "#0b7542",
        style: {
          height: 130,
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 20,
          fontFamily: "Rajdhani_600SemiBold"
        },
        labelPosition: "beside-icon",
        tabStyle: {
          marginTop: 25,
          marginLeft: 10,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "center",
        }
      }}>
      <Tab.Screen name = "Pesquisa" component = {Pesquisa} ></Tab.Screen> 
      <Tab.Screen name = "Transação" component = {TransactionScreen} ></Tab.Screen>
      </Tab.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
