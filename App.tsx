import { useFonts } from "expo-font";
import React from "react";

//fontes
import { Roboto_700Bold } from "@expo-google-fonts/roboto";

//components
import Layout from "./src/components/Layout";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import MoedasProvider from "./src/contexts/MoedasContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <Layout>
          <MoedasProvider>
            <Routes />
          </MoedasProvider>
        </Layout>
      </>
    );
  }
}
