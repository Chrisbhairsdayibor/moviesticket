import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './features/store';
import Counter from './components/Counter';
import Home from './components/Home';

export default function App() {
  return (

    <Provider store={store}>
   {/* <Counter/> */}
   <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
