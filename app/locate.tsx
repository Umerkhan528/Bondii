import { useRouter } from "expo-router";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
const  Locate=()=>{
    const router = useRouter();
    return(
        <View>
        <Animated.View  style={style.animateMainScreen} entering={SlideInRight.duration(500).delay(500)} exiting={SlideOutLeft.duration(500).delay(500)} >
            <View style={style.imageScreen}>
                <Image  source={require("@/assets/images/png/2.png")}/>
            </View>
            <View style={style.mainScreenContentBox}>
                <Text style={style.onBoardScreenContentTitle}>Locate & Capture</Text>
                <Text style={style.onBoardScreenContent}>Locate & complete your mission.</Text>
            </View>
        </Animated.View>
        <TouchableOpacity
                                style={style.floatingButton}
                                onPress={() => router.navigate("/easyrankup")}
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
}

export default Locate;

const style =  StyleSheet.create({
    animateMainScreen:{
        height:"99%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        zIndex:0,
    },
    imageScreen:{
        padding:20,
        width:"100%",
        height:"50%",
        justifyContent:"center",
        alignItems:"flex-start",
        marginBottom:20,
    },
    mainScreenContentBox:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
        width:"90%",
        marginLeft:30,
        marginTop:30,
        height:"20%"
    },
    onBoardScreenContentTitle:{
        color:"orange",
        fontWeight:"500",
        fontSize:17,
        width:"90%",
        fontFamily:"Montserrat",
        lineHeight:22,
    },
    onBoardScreenContent:{
        color:"black",
        fontWeight:"600",
        fontSize:31,
        width:"90%",
        alignItems:"flex-start",
        fontFamily: "Montserrat",
        lineHeight:38,
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
});