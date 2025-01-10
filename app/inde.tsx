// import React from "react";
// import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text, useWindowDimensions, ImageBackground, ScrollView } from "react-native";
// import { onBoard } from "@/data/onboarddata";
// import Animation from "react-native-reanimated";
// import { onBoardType } from "@/data/onboarddata";
// import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
// import Locate from "./locate";
// import EasyRankup from "./easyrankup";
// import { useRouter } from "expo-router";
// import EasyReward from "./ind";

// const displayScreen =[<EasyReward/>,
//     <Locate/>,
//     <EasyRankup/>
// ]

// const Index = () => {
//     const route = useRouter();
//     const { width: SCREENWIDTH ,height: SCREENHEIGHT } = useWindowDimensions();
//     const x = useSharedValue(0);
//     const onScroll = useAnimatedScrollHandler({
//         onScroll: event => {
//             x.value = event.contentOffset.x;
//             console.log(x.value);
//         }
//     });
//     return (
//         <View style={style.mainScreen}>
//             <ScrollView onScroll={onScroll} style={{height:SCREENHEIGHT*0.46}} horizontal={true} showsHorizontalScrollIndicator={false} >
//             <Animated.View  style={[ style.mainImage ,{ height:SCREENHEIGHT*0.6 , flex: 0.4}]}>
//                 <Image
//                     source={require('@/assets/images/png/whole.png')} />
//             </Animated.View>
//             </ScrollView>
//             <Animation.FlatList
//                 onScroll={onScroll}
//                 data={onBoard}
//                 renderItem={({ item, index }) => (
//                     <SliderItem item={item}  />
//                 )}
//                 horizontal
//                 scrollEventThrottle={16}
//                 showsHorizontalScrollIndicator={false}
//                 pagingEnabled={true}
//             />
//             <TouchableOpacity
//                 style={style.floatingButton}
//                 onPress={() => route.navigate("/locate")}
//                 accessible={true}
//                 accessibilityLabel="Next screen"
//             >
//                 <Image
//                     source={require("@/assets/images/png/Vector.png")}
//                     style={{ width: 24, height: 24 }}
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// };


// type props = {
//     item: onBoardType,

// }

// const SliderItem = ({ item }: props) => {

//     const { width: SCREENWIDTH ,height: SCREENHEIGHT } = useWindowDimensions();
//     return (
//         <View style={[style.animateMainScreen, { width: SCREENWIDTH * 1 , height: SCREENHEIGHT * 0.15,marginRight:SCREENWIDTH * 0}]}>
//             <View style={[style.mainScreenContentBox , {width: SCREENWIDTH * 0.8}]}>
//                 <Text style={style.onBoardScreenContentTitle}>{item.title}</Text>
//                 <Text style={style.onBoardScreenContent}>{item.subTitle}</Text>
//             </View>
//         </View>
//     );
// }

// const style = StyleSheet.create({
//     animateMainScreen: {
//         justifyContent: "center",
//         alignItems: "flex-start",
//     },
//     mainImage: {
//         marginLeft:15,
//         marginTop:15,
//         marginRight:15,
//         justifyContent: "center",
//         alignItems: "flex-start",
//     },
//     mainScreenContentBox: {
//         marginLeft: 15,
//     },
//     onBoardScreenContentTitle: {
//         color: "orange",
//         fontWeight: "500",
//         fontSize: 17,
//         fontFamily: "Montserrat",
//         lineHeight: 22,
//     },
//     onBoardScreenContent: {
//         color: "black",
//         fontWeight: "600",
//         fontSize: 31,
//         alignItems: "flex-start",
//         fontFamily: "Montserrat",
//         lineHeight: 38,
//     },
//     mainScreen: {
//         backgroundColor: "white",
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     floatingButton: {
//         backgroundColor: "orange",
//         height: 81,
//         width: 81,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//         position: "absolute",
//         bottom: 60,
//         right: 30,
//         zIndex: 5,
//     },
// });

// export default Index;
