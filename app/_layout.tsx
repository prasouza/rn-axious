import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false // Ocultar o cabeçalho para todas as telas
      }}
    />
  );
}
