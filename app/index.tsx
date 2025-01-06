import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    useColorScheme,
    useWindowDimensions,
} from "react-native";
import Icon from "@/assets/images/wordle-icon.svg";
import { format } from "date-fns";
import { Colors } from "@/constants/Colors";
// import ThemedText from "@/components/ThemedText";
import { Link } from "expo-router";

import Animated, {
    FadeIn,
    FadeInDown,
    FadeInLeft,
} from "react-native-reanimated";

const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

export default function Index() {
    const colorScheme = useColorScheme();
    const backgroundColor = Colors[colorScheme ?? "light"].background;
    const textColor = Colors[colorScheme ?? "light"].text;

    const { width } = useWindowDimensions();

    return (
        <Animated.View style={[styles.container, { backgroundColor }]}>
            <Animated.View style={styles.header} entering={FadeInDown}>
                <Icon width={100} height={70} />
                <Text style={styles.title}>Wordle</Text>
                <Text style={styles.text}>
                    Get 6 chances to guess a 5-letter word.
                </Text>
            </Animated.View>

            <View
                style={[
                    styles.menu,
                    { flexDirection: width > 600 ? "row" : "column" },
                ]}
            >
                <Link
                    href={"/game"}
                    style={[
                        styles.btn,
                        {
                            backgroundColor:
                                colorScheme === "light" ? "#000" : "#4a4a4a",
                        },
                    ]}
                    asChild
                >
                    <AnimatedTouchableOpacity entering={FadeInLeft}>
                        <Text style={[styles.btnText, styles.primaryText]}>
                            Play
                        </Text>
                    </AnimatedTouchableOpacity>
                </Link>

                <AnimatedTouchableOpacity
                    style={[styles.btn, { borderColor: textColor }]}
                    // onPress={handlePresentSubscribeModalPress}
                    entering={FadeInLeft.delay(200)}
                >
                    <Text style={styles.btnText}>Subscribe</Text>
                </AnimatedTouchableOpacity>
            </View>

            <Animated.View style={styles.footer} entering={FadeIn.delay(300)}>
                <Text style={styles.footerDate}>
                    {format(new Date(), "MMMM d, yyyy")}
                </Text>
                <Text style={styles.footerText}>No. 1151</Text>
                <Text style={styles.footerText}>Edited by Preethiviraj</Text>
            </Animated.View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        gap: 40,
        paddingHorizontal: 50,
    },
    header: {
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontSize: 40,
        fontFamily: "FrankRuhlLibre_800ExtraBold",
    },
    text: {
        fontSize: 26,
        textAlign: "center",
        fontFamily: "FrankRuhlLibre_500Medium",
    },
    menu: {
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    btn: {
        justifyContent: "center",
        borderRadius: 30,
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1,
        width: "60%",
        maxWidth: 200,
    },
    btnText: {
        padding: 14,
        fontSize: 16,
        fontWeight: "semibold",
        color: "#333",
    },
    primaryItem: {
        backgroundColor: "#000",
    },
    primaryText: {
        color: "#fff",
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
    },
    footerDate: {
        fontSize: 14,
        fontWeight: "bold",
    },
    footerText: {
        fontSize: 14,
    },
});
