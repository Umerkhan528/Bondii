import { onBoard, onBoardType } from "@/data/onboarddata";
import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";



const Index = () => {
  const { width: SCREENWIDTH, height: SCREENHEIGHT } = useWindowDimensions();
  const scrollViewRef = useRef(null);
  const flatListRef = useRef(null);

  const handleScrollTo = (index) => {
    const scrollPosition = SCREENWIDTH * index;

    flatListRef.current?.scrollToOffset({ offset: scrollPosition, animated: true });


    scrollViewRef.current?.scrollTo({ x: scrollPosition, animated: true });
  };

  return (
    <View style={style.mainScreen}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        style={{ height: SCREENHEIGHT * 0.46 }}
        showsHorizontalScrollIndicator={false}
      >
        {onBoard.map((item, index) => (
          <View
            key={item.id}
            style={[
              style.mainImage,
              { height: SCREENHEIGHT * 0.6, width: SCREENWIDTH },
            ]}
          >
            <Image
              source={require("@/assets/images/png/whole.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        ))}
      </ScrollView>

      <FlatList
        ref={flatListRef}
        data={onBoard}
        renderItem={({ item }) => <SliderItem item={item}/>}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
      />

      <View style={style.buttonsContainer}>
        {onBoard.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={style.button}
            onPress={() => handleScrollTo(index)}
          >
            <Text style={style.buttonText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

type props = {
    item: onBoardType,
}


const SliderItem = ({ item }:props) => {
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 100,
    width: "100%",
  },
  button: {
    backgroundColor: "orange",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Index;
