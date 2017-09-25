import { StackNavigator } from 'react-navigation';
import HoursListScene from './scenes/HoursListScene';
import JobsListScene from './scenes/JobsListScene';

const TSApp = StackNavigator({
  Home: { screen: HoursListScene },
  JobsList: { screen: JobsListScene }
});

export default TSApp;
