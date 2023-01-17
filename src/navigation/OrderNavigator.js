import OrdersScreen from "../screens/OrdersScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default OrderNavigator = () => {
  return (
    
      <Stack.Navigator 
      initialRouteName="Orders" 
      screenOptions={{
        headerStyle: 
        { backgroundColor: "#42d1ed"}
      }}>
        <Stack.Screen 
        name="Orders" 
        component={OrdersScreen} 
        options={{
          title: "Órdenes"
        }} />
      </Stack.Navigator>
    
  );
};