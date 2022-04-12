import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './navigation';

export default function App() {

  return (
    <View style={styles.container}>
      <RootNavigation />
      <StatusBar barStyle='light-content' backgroundColor={'black'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

