import React, { useRef, useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text, useWindowDimensions, ImageBackground, ScrollView } from "react-native";
import { onBoard } from "@/data/onboarddata";
import Animation from "react-native-reanimated";
import { onBoardType } from "@/data/onboarddata";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import EasyReward from ".";
import Locate from "./locate";
import EasyRankup from "./easyrankup";
import { useRouter } from "expo-router";
import onBoardSvg from "@/assets/images/svg/onboard";
import OnboardSvg from "@/assets/images/svg/onboard";



// const displayScreen =[<EasyReward/>,
//     <Locate/>,
//     <EasyRankup/>
// ]

const Index = () => {
    let count = 0;
    const router = useRouter();
    const [currentIndex, setindex] = useState(0);
    const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();
    console.log(SCREENWIDTH);
    const x = useSharedValue(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const flatlistRef = useRef<FlatList>(null);


    const onboardscroll = () => {
        const newcurrentIndex = currentIndex + 1;
        if(newcurrentIndex > 2){router.navigate("/easyrankup")}
        setindex(newcurrentIndex);
        const scrollPosition = SCREENWIDTH + count;
        const flatlistPosition = SCREENWIDTH + 632;
        console.log(" new cuurent index : ", { newcurrentIndex });
        console.log(" currentindex : ", { currentIndex});
        console.log(flatlistPosition);
        console.log(" scrollimage : ", { count });
        if ( newcurrentIndex == 2) {
            scrollViewRef.current?.scrollToEnd();
        } else {
            scrollViewRef.current?.scrollTo({ x: scrollPosition, animated: true });
            flatlistRef.current?.scrollToOffset({ offset: flatlistPosition, animated: true });
            count = count + 832;
        }
    };

    
    return (
        <View style={style.mainScreen}>
            <ScrollView style={{ height: SCREENHEIGHT * 0.46 }} horizontal={true} showsHorizontalScrollIndicator={false} ref={scrollViewRef} scrollEnabled={false}>
                <Animated.View style={[style.mainImage, { height: SCREENHEIGHT * 0.6, flex: 0.4 }]}>
                    <OnboardSvg />
                    {/* <Image
                    source={require('@/assets/images/p/whole.png')} /> */}
                </Animated.View>
            </ScrollView>
            <Animation.FlatList ref={flatlistRef}
                scrollEnabled={false}
                data={onBoard}
                renderItem={({ item }) =>
                    <SliderItem item={item} />
                }
                horizontal
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            />
            <View style={style.paginationContainer}>
                {onBoard?.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            style.paginationDot,
                            index === currentIndex && style.activePaginationDot,
                        ]}
                    />
                ))}

            </View>
            <TouchableOpacity
                style={style.floatingButton}
                onPress={() => onboardscroll()}
                accessible={true}
                accessibilityLabel="Next screen"
            >
                <Image
                    source={require("@/assets/images/png/Vector.png")}
                    style={{ width: 24, height: 24 }}
                />
            </TouchableOpacity>
        </View>
    );
};


type props = {
    item: onBoardType,

}

const SliderItem = ({ item }: props) => {

    const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();
    return (
        <View style={[style.animateMainScreen, { width: SCREENWIDTH * 1, height: SCREENHEIGHT * 0.15, marginRight: SCREENWIDTH * 0 }]}>
            <View style={[style.mainScreenContentBox, { width: SCREENWIDTH * 0.8 }]}>
                <Text style={style.onBoardScreenContentTitle}>{item.title}</Text>
                <Text style={style.onBoardScreenContent}>{item.subTitle}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    animateMainScreen: {
        justifyContent: "center",
        alignItems: "flex-start",
    },
    mainImage: {
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    mainScreenContentBox: {
        marginLeft: 15,
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
    mainScreen: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    floatingButton: {
        backgroundColor: "orange",
        height: 81,
        width: 81,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        position: "absolute",
        bottom: 60,
        right: 30,
        zIndex: 5,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
        width: '100%',
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activePaginationDot: {
        width: 25,
        backgroundColor: 'orange',
    },
});

export default Index;
