import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import Header from './src/components/layout/Header';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/components/tabs/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <Header />
          <StatusBar bg='#2c3e50' />
          <Navigator />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
