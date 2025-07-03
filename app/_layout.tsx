import { Stack } from "expo-router";
import { Pressable, Text, Image } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{width: 30, height: 30}}
      source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
    />
  )
}


export default function RootLayout() {
  return <Stack 
            screenOptions={{

              headerStyle: {
                backgroundColor: "#6a51ae",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => (
                <Pressable onPress={() => alert("Menu Button Pressed!")}>
                  <Text style={{color: "#fff", fontSize: 16, marginRight: 6}}>Menu</Text>
                </Pressable>
              ),
              headerTitle: (props) => <LogoTitle/>
            }}>
    <Stack.Screen name ="index" options={{
      title: "Home",
      
    }}
    />
    <Stack.Screen name ="about" options={{
      title: "About Screen",
      headerStyle: {
        backgroundColor: "#6a51ae",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerBackButtonDisplayMode: "generic",
    }}
    
    />
  </Stack>
}
