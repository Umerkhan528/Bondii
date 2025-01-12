import React, { useRef, useState } from "react";
<<<<<<< HEAD
import { 
    StyleSheet, 
    View, 
    FlatList, 
    TouchableOpacity, 
    Image, 
    Text, 
    useWindowDimensions, 
    ScrollView 
} from "react-native";
import Animated from "react-native-reanimated";
=======
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text, useWindowDimensions, ImageBackground, ScrollView } from "react-native";
>>>>>>> 67d03759661eb7879728e3afc66298e5269d9496
import { onBoard } from "@/data/onboarddata";
import { onBoardType } from "@/data/onboarddata";
<<<<<<< HEAD
import OnboardSvg from "@/assets/images/svg/onboard";
=======
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import EasyReward from ".";
import Locate from "./locate";
import EasyRankup from "./easyrankup";
import { useRouter } from "expo-router";
import onBoardSvg from "@/assets/images/svg/onboard";
import OnboardSvg from "@/assets/images/svg/onboard";

>>>>>>> 67d03759661eb7879728e3afc66298e5269d9496


// const displayScreen =[<EasyReward/>,
//     <Locate/>,
//     <EasyRankup/>
// ]

const Index = () => {
<<<<<<< HEAD
    const route = useRouter();
    const [currentIndex, setIndex] = useState(0);
    const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();
    const scrollViewRef = useRef<ScrollView>(null);
    const flatlistRef = useRef<FlatList>(null);

    const onboardScroll = (index: number) => {
        const newCurrentIndex = Math.min(onBoard.length - 1, index); // Ensure index stays within bounds
        setIndex(newCurrentIndex);
        const scrollPosition = newCurrentIndex * SCREENWIDTH;

        // Scroll the ScrollView
        scrollViewRef.current?.scrollTo({ x: scrollPosition, animated: true });

        // Scroll the FlatList
        flatlistRef.current?.scrollToOffset({ offset: scrollPosition, animated: true });
    };

    return (
        <View style={styles.mainScreen}>
            {/* ScrollView for SVG or Image */}
            <ScrollView
                style={{ height: SCREENHEIGHT * 0.46 }}
=======
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
>>>>>>> 67d03759661eb7879728e3afc66298e5269d9496
                horizontal
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
                scrollEnabled={false}
            >
                <Animated.View style={[styles.mainImage, { height: SCREENHEIGHT * 0.6, flex: 0.4 }]}>
                    <OnboardSvg />
                </Animated.View>
            </ScrollView>

            {/* FlatList for Onboarding Content */}
            <FlatList
                ref={flatlistRef}
                data={onBoard}
                renderItem={({ item }) => <SliderItem item={item} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / SCREENWIDTH);
                    setIndex(index);
                }}
            />
<<<<<<< HEAD

            {/* Pagination Dots */}
            <View style={styles.paginationContainer}>
=======
            <View style={style.paginationContainer}>
>>>>>>> 67d03759661eb7879728e3afc66298e5269d9496
                {onBoard?.map((_, index) => (
                    <View
                        key={index}
                        style={[
<<<<<<< HEAD
                            styles.paginationDot,
                            index === currentIndex && styles.activePaginationDot,
                        ]}
                    />
                ))}
            </View>

            {/* Floating Button */}
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => onboardScroll(currentIndex + 1)}
=======
                            style.paginationDot,
                            index === currentIndex && style.activePaginationDot,
                        ]}
                    />
                ))}

            </View>
            <TouchableOpacity
                style={style.floatingButton}
                onPress={() => onboardscroll()}
>>>>>>> 67d03759661eb7879728e3afc66298e5269d9496
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

// Slider Item Component
type Props = {
    item: onBoardType,
};

<<<<<<< HEAD
const SliderItem = ({ item }: Props) => {
    const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();
    return (
        <View
            style={[
                styles.animateMainScreen,
                { width: SCREENWIDTH, height: SCREENHEIGHT * 0.15 },
            ]}
        >
            <View style={[styles.mainScreenContentBox, { width: SCREENWIDTH * 0.8 }]}>
                <Text style={styles.onBoardScreenContentTitle}>{item.title}</Text>
                <Text style={styles.onBoardScreenContent}>{item.subTitle}</Text>
=======
}

const SliderItem = ({ item }: props) => {

    const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();
    return (
        <View style={[style.animateMainScreen, { width: SCREENWIDTH * 1, height: SCREENHEIGHT * 0.15, marginRight: SCREENWIDTH * 0 }]}>
            <View style={[style.mainScreenContentBox, { width: SCREENWIDTH * 0.8 }]}>
                <Text style={style.onBoardScreenContentTitle}>{item.title}</Text>
                <Text style={style.onBoardScreenContent}>{item.subTitle}</Text>
>>>>>>> 67d03759661eb7879728e3afc66298e5269d9496
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    mainScreen: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    animateMainScreen: {
        justifyContent: "center",
        alignItems: "flex-start",
    },
    mainImage: {
<<<<<<< HEAD
        margin: 15,
=======
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
>>>>>>> 67d03759661eb7879728e3afc66298e5269d9496
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
        fontFamily: "Montserrat",
        lineHeight: 38,
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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 100,
        width: "100%",
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#ccc",
        marginHorizontal: 5,
    },
    activePaginationDot: {
        width: 25,
        backgroundColor: "orange",
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
