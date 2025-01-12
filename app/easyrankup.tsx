import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Animation, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

const  EasyRankup=()=>{
    return(
        <View style={style.mainScreen}>
        <Animation.View style={style.animateMainScreen} entering={SlideInRight.duration(500).delay(500)} exiting={SlideOutLeft.duration(500).delay(500)} >
            <View style={style.imageScreen}>
                <Image source={require("@/assets/images/png/3.png")}/>
            </View>
            <View style={style.mainScreenContentBox}>
                <Text style={style.onBoardScreenContentTitle}>Easy Rank Up</Text>
                <Text style={style.onBoardScreenContent}>Rank up & Win Bigger Rewards.</Text>
            </View>
            
        </Animation.View>
        <TouchableOpacity style={style.floatingButton}>
        <Image source={require("@/assets/images/png/Vector.png")}/>
        </TouchableOpacity>
        </View>
    );
}

export default EasyRankup;

const style =  StyleSheet.create({
    mainScreen:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    animateMainScreen:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    imageScreen:{
        padding:20,
        width:"100%",
        height:"50%",
        justifyContent:"center",
        alignItems:"flex-end",
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
        width:"100%",
        fontFamily:"Montserrat",
        lineHeight:22,
    },
    onBoardScreenContent:{
        color:"black",
        fontWeight:"600",
        fontSize:31,
        width:"100%",
        alignItems:"flex-start",
        fontFamily: "Montserrat",
        lineHeight:38,
    },
    floatingButton:{
        backgroundColor:"orange",
        height:81,
        width:81,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        position:"absolute",
        bottom:60,
        right:30,
        zIndex:5,
    },
});