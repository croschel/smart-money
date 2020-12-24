import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Report,
      NewEntry,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'history',
    }
  )
);

export default Routes;
