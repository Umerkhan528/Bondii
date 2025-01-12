import { onBoardType } from "@/data/onboarddata";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

type props = {
    item: onBoardType,
    index: number,
}

const SliderItem = ({ item, index }: props) => {
    const { width: SCREENWIDTH } = useWindowDimensions();
    return (
        <View style={[style.animateMainScreen, { width: SCREENWIDTH }]}>
            <View style={[style.imageScreen, { width: SCREENWIDTH * 0.8, height: SCREENWIDTH * 0.8 }]}>
                <Image source={item.imageUrl} />
            </View>
            <View style={style.mainScreenContentBox}>
                <Text style={style.onBoardScreenContentTitle}>{item.title}</Text>
                <Text style={style.onBoardScreenContent}>{item.subTitle}</Text>
            </View>
        </View>
    );
}
export default SliderItem;

const style = StyleSheet.create({
    animateMainScreen: {
        height: "100%",
        width: "45%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    imageScreen: {
        padding: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 20,
        marginLeft: 30,
        paddingRight: 40
    },
    mainScreenContentBox: {
        width: "95%",
        marginTop: 30,
        marginLeft: 20,
        height: "20%"
    },
    onBoardScreenContentTitle: {
        color: "orange",
        fontWeight: "500",
        fontSize: 17,
        fontFamily: "Montserrat",
        lineHeight: 22,
    },
    onBoardScreenContent: {
        color: "black",
        fontWeight: "600",
        fontSize: 31,
        alignItems: "flex-start",
        fontFamily: "Montserrat",
        lineHeight: 38,
    },
});