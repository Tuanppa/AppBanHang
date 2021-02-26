import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  useWindowDimensions,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => navigation.toggleDrawer()} title="Click" />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width <= 768;
  return (
    <Drawer.Navigator 
      //initialRouteName="Home"
      openByDefault
      drawerType={isLargeScreen ? 'back' : 'permanent' }
      drawerStyle={isLargeScreen ? null : { width: '100%' }}
      overlayColor="transparent"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" title="Lịch làm việc" component={NotificationsScreen} />
      <Drawer.Screen name="Phiếu báo quân số" component={NotificationsScreen} />
      <Drawer.Screen name="Lịch tuần" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
  <NavigationContainer>
    <MyDrawer />
  </NavigationContainer>
  );
}
