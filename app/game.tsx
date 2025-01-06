import { StyleSheet, View } from "react-native";

const Page = () => {
    return <View style={[styles.container]}></View>;
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
