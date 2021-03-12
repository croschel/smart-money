import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import InitBalance from './pages/InitBalance';
import Loading from './pages/Loading';
import Welcome from './pages/Welcome';
import { createStackNavigator } from 'react-navigation-stack';

export default (isLogged: boolean) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createStackNavigator(
          {
            SignIn,
            SignUp,
          },
          {
            initialRouteName: 'SignIn',
            headerMode: 'none',
          }
        ),
        App: createStackNavigator(
          {
            Loading,
            Welcome,
            InitBalance,
            Main,
            Report,
            NewEntry,
          },
          {
            initialRouteName: 'Loading',
            headerMode: 'none',
          }
        ),
      },
      {
        initialRouteName: isLogged ? 'App' : 'Sign',
      }
    )
  );
