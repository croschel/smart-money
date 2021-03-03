import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import Welcome from './pages/Welcome';
import Loading from './pages/Loading';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      Welcome,
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
