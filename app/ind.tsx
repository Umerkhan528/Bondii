import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { onBoard } from "@/data/onboarddata";
import Animated from "react-native-reanimated";
import { useRouter } from "expo-router";
import OnboardSvg from "@/assets/images/svg/onboard";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current page
  const [scrollCount, setScrollCount] = useState(0); // Track scroll count
  const scrollViewRef = useRef<ScrollView>(null);
  const flatlistRef = useRef<FlatList>(null);
  const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();

  const onboardScroll = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < onBoard.length) {
      setCurrentIndex(nextIndex);

      // Dynamic scroll distance
      const additionalScroll = scrollCount === 1 ? 200 : scrollCount * 350;

      // Scroll the image view
      scrollViewRef.current?.scrollTo({
        x: SCREENWIDTH * nextIndex + additionalScroll,
        animated: true,
      });

      // Scroll the FlatList
      flatlistRef.current?.scrollToOffset({
        offset: SCREENWIDTH * nextIndex,
        animated: true,
      });

      // Update scroll count
      setScrollCount((prev) => prev + 1);
    }
  };


  return (
    <View style={style.mainScreen}>
      <ScrollView
        style={{ height: SCREENHEIGHT * 0.46 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        scrollEnabled={false}
      >
        <Animated.View
          style={[
            style.mainImage,
            { height: SCREENHEIGHT * 0.6, flex: 0.4 },
          ]}
        >
          <OnboardSvg />
        </Animated.View>
      </ScrollView>

      <Animated.FlatList
        ref={flatlistRef}
        data={onBoard}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        keyExtractor={(_, index) => index.toString()}
      />

      <View style={style.paginationContainer}>
        {onBoard.map((_, index) => (
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
        onPress={onboardScroll}
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

type Props = {
  item: { title: string; subTitle: string }; // Adjust type as needed
};

const SliderItem = ({ item }: Props) => {
  const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();
  return (
    <View
      style={[
        style.animateMainScreen,
        { width: SCREENWIDTH, height: SCREENHEIGHT * 0.15 },
      ]}
    >
      <View style={[style.mainScreenContentBox, { width: SCREENWIDTH * 0.8 }]}>
        <Text style={style.onBoardScreenContentTitle}>{item.title}</Text>
        <Text style={style.onBoardScreenContent}>{item.subTitle}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
