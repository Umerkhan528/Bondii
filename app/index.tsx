import React, { useRef, useState } from "react";
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
import { onBoard } from "@/data/onboarddata";
import { onBoardType } from "@/data/onboarddata";
import OnboardSvg from "@/assets/images/svg/onboard";

const Index = () => {
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

            {/* Pagination Dots */}
            <View style={styles.paginationContainer}>
                {onBoard?.map((_, index) => (
                    <View
                        key={index}
                        style={[
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
        margin: 15,
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
});

export default Index;
