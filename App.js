import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import CartScreen from "./screens/CartScreen";
import { CartContext } from "./context/CartContext";
import { Ionicons } from "@expo/vector-icons"; // Icons for bottom tabs

const Tab = createBottomTabNavigator();

export default function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: "#535a3b" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            tabBarStyle: { backgroundColor: "#535a3b" },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Login") {
                iconName = "log-in-outline";
              } else if (route.name === "Products") {
                iconName = "list-outline";
              } else if (route.name === "ProductDetails") {
                iconName = "information-circle-outline";
              } else if (route.name === "Cart") {
                iconName = "cart-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsScreen}
            options={{ title: "Products" }}
          />
          <Tab.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: "Product Details" }}
          />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}
