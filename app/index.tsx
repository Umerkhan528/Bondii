import { StyleSheet, Image, View, Text } from "react-native";

const EasyReward=()=>{
    return(
        <View style={style.mainScreen}>
            <View style={style.imageScreen}>
                <Image src="@\assets\images\png\Img_car4.png"/>
            </View>
            <View style={style.mainScreenContentBox}>
                <Text style={style.onBoardScreenContentTitle}>Easy Rewards</Text>
                <Text style={style.onBoardScreenContent}>Complete missions every month.</Text>
            </View>
        </View>
    );
}

export default EasyReward;

const style =  StyleSheet.create({
    mainScreen:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    imageScreen:{
        padding:20,
        height:350,
        width:350,
        justifyContent:"center",
        alignItems:"center"
    },
    mainScreenContentBox:{
        justifyContent:"flex-start",
        alignItems:"center",
        width:300,
    },
    onBoardScreenContentTitle:{
        color:"orange",
        fontWeight:500,
        fontSize:17,
        fontFamily:"Montserrat",
    },
    onBoardScreenContent:{
        color:"black",
        fontWeight:600,
        fontSize:31,
        fontFamily: "Montserrat",
    }
});