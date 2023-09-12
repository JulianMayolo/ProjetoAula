import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <NavigationContainer>
      <LinearGradient
        colors={["#111017", "#090320"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}>
        <Routes />

      </LinearGradient>
    </NavigationContainer>
  );
}
