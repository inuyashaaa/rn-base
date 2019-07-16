import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import screens from '../components';
import store from './store.config';

const registerScreens = () => {
  Navigation.registerComponentWithRedux('HomeScreen', () => screens.HomeScreen, Provider, store);
  Navigation.registerComponentWithRedux('TodoScreen', () => screens.TodoScreen, Provider, store);
};

export default registerScreens;
