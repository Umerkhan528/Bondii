import { useRouter } from "expo-router";
import { StyleSheet, Image, View, Text} from "react-native";

const EasyReward=()=>{
    const router =  useRouter();
    return(
        <View>
        <View style={style.animateMainScreen}>
            <View style={style.imageScreen}>
                <Image source={require("@/assets/images/png/Img_car4.png")}/>
            </View>
            <View style={style.mainScreenContentBox}>
                <Text style={style.onBoardScreenContentTitle}>Easy Rewards</Text>
                <Text style={style.onBoardScreenContent}>Complete missions every month.</Text>
            </View>
        </View>
        </View>
    );
}

export default EasyReward;

const style =  StyleSheet.create({
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
        alignItems:"center",
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