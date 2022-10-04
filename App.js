import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store/configStore";
import { Text } from "react-native";
import LoginIn from "./src/screens/LoginIn";
import TabScreens from "./src/screens/TabScreens";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/*<LoginIn />*/}
        <TabScreens/>
      </PersistGate>
    </Provider>
  );
}

export default App;


