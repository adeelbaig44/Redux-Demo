import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import MyDrawer from 'src/Components/DrawerNavigator';
import {fullHeight} from 'src/config/screenSize';
import OnBoardingScreen2 from 'src/screens/OnBoarding2';
import Muqabla_3 from 'src/screens/Tournaments/Muqabla_3';
import {OnboardingScreen1} from '../screens/OnBoarding1';
import {SplashScreen} from '../screens/Splash';

const Stack = createStackNavigator();
const options = {
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
const bottomOptions = {
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [fullHeight, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
function Route() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Muqabla_3} options={options} />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={options}
      />
      <Stack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
        options={options}
      />
      <Stack.Screen name="Home" component={MyDrawer} options={options} />
      <Stack.Screen
        name="OnBoardingScreen2"
        component={OnBoardingScreen2}
        options={options}
      />
    </Stack.Navigator>
  );
}

export default Route;
