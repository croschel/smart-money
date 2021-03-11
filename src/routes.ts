import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import InitBalance from './pages/InitBalance';
import Loading from './pages/Loading';
import Welcome from './pages/Welcome';

export default (isLogged: boolean) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createSwitchNavigator(
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
          }
        ),
      },
      {
        initialRouteName: isLogged ? 'App' : 'Sign',
      }
    )
  );
