import { Provider } from 'react-redux';
import { store } from './redux/store';
import ViewMarathonScreen from './SCREENS/ViewMarathonScreen';
import { CreateMarathonScreen } from './SCREENS/CreateMarathonScreen';
import StackNavigator from './NAVIGATION/appNavigation';
export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
