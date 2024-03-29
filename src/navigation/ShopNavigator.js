import Categories from "../screens/Categories";
import Details from "../screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import Products from "../screens/Products";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="Categorias" screenOptions={{
        headerStyle: { backgroundColor: "#42d1ed"}
      }}>
        <Stack.Screen name="Categorias" component={Categories} options={{
          title: "Home"
        }} />
        <Stack.Screen name="Productos" component={Products}
          options={({ route }) => ({
            title: route.params.name,
        })} />
        <Stack.Screen name="Detalles" component={Details}
        options={({ route }) => ({
          title: route.params.name,
        })} />
      </Stack.Navigator>
    
  );
};