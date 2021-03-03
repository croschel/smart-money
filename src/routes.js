import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import InitBalance from './pages/InitBalance';
import Loading from './pages/Loading';
import Welcome from './pages/Welcome';

const Routes = createAppContainer(
  createSwitchNavigator(
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
      backBehavior: 'history',
    }
  )
);

export default Routes;
