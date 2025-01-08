import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { allWords } from "@/utils/allWords";
import { words } from "@/utils/targetWords";
import OnScreenKeyboard from "@/components/OnScreenKeyboard";

const ROWS = 6;

const Page = () => {
    const colorScheme = useColorScheme();
    const router = useRouter();
    const [word, setWord] = useState(
        words[Math.floor(Math.random() * words.length)]
    );
    const backgroundColor = Colors[colorScheme ?? "light"].gameBg;
    const textColor = Colors[colorScheme ?? "light"].text;
    const grayColor = Colors[colorScheme ?? "light"].gray;

    const wordLetters = word.split("");

    const [rows, setRows] = useState<string[][]>(
        new Array(ROWS).fill(new Array(5).fill(""))
    );

    const [curRow, setCurRow] = useState(0);
    const [curCol, _setCurCol] = useState(0);

    const [greenLetters, setGreenLetters] = useState<string[]>([]);
    const [yellowLetters, setYellowLetters] = useState<string[]>([]);
    const [grayLetters, setGrayLetters] = useState<string[]>([]);

    const addKey = (key: string) => {};

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <OnScreenKeyboard
                onKeyPressed={addKey}
                greenLetters={greenLetters}
                yellowLetters={yellowLetters}
                grayLetters={grayLetters}
            />
        </View>
    );
};

export default Page;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
    },
    gameField: {
        alignItems: "center",
        gap: 8,
    },
    gameFieldRow: {
        flexDirection: "row",
        gap: 8,
    },
    cell: {
        backgroundColor: "#fff",
        width: 62,
        height: 62,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
    },
    cellText: {
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    headerIcons: {
        flexDirection: "row",
        gap: 10,
    },
});
