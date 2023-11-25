import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import SearchScreen from "./pages/SearchScreen";
import FavoritesScreen from "./pages/FavoritesScreen";
import DetailScreen from "./pages/DetailScreen";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
// Import your DetailScreen component here

const bottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgray",
            marginHorizontal: 16,
            borderRadius: 24,
            height: 64,
            marginBottom: 16,
            shadowOpacity: 0,
            elevation: 1,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Profile") {
              iconName = "person";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Search") {
              iconName = "search";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Favorites") {
              iconName = "star";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Detail") {
              iconName = "info"; // Change this to an appropriate icon
              color = focused ? "black" : "lightgray";
            }

            return <Octicons name={iconName} size={24} color={color} />;
          },
          headerShown: false,
        })}
      >
        <bottomTabNavigator.Screen name="Search" component={SearchScreen} />
        <bottomTabNavigator.Screen name="Favorites" component={FavoritesScreen} />
        <bottomTabNavigator.Screen name="Home" component={HomeScreen} />
        <bottomTabNavigator.Screen name="Profile" component={ProfileScreen} />
        <bottomTabNavigator.Screen name="Detail" component={DetailScreen} />
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
