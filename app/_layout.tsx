import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack  >
      <Stack.Screen
        name="index"
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="locate"
        // options={{headerShown:false}}
      />
      <Stack.Screen
        name="easyrankup"
        // options={{headerShown:false}}
      />
    </Stack>
  );
}
