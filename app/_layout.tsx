import { Stack, useRouter } from "expo-router";
import {
    useFonts,
    FrankRuhlLibre_800ExtraBold,
    FrankRuhlLibre_500Medium,
    FrankRuhlLibre_900Black,
} from "@expo-google-fonts/frank-ruhl-libre";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import Logo from "@/assets/images/nyt-logo.svg";
import { TouchableOpacity, useColorScheme } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { tokenCache } from "@/utils/cache";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
    throw new Error(
        "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
}

// Load the fonts first before hiding the splash screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    let [fontsLoaded] = useFonts({
        FrankRuhlLibre_800ExtraBold,
        FrankRuhlLibre_500Medium,
        FrankRuhlLibre_900Black,
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <ClerkLoaded>
                <ThemeProvider
                    value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
                >
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <BottomSheetModalProvider>
                            <Stack>
                                <Stack.Screen
                                    name="index"
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                                <Stack.Screen
                                    name="login"
                                    options={{
                                        presentation: "modal",
                                        headerTitle: () => (
                                            <Logo width={150} height={40} />
                                        ),
                                        headerShadowVisible: false,
                                        headerLeft: () => (
                                            <TouchableOpacity
                                                onPress={() => router.back()}
                                            >
                                                <Ionicons
                                                    name="close"
                                                    size={26}
                                                    color={Colors.light.gray}
                                                />
                                            </TouchableOpacity>
                                        ),
                                    }}
                                />
                            </Stack>
                        </BottomSheetModalProvider>
                    </GestureHandlerRootView>
                </ThemeProvider>
            </ClerkLoaded>
        </ClerkProvider>
    );
}
