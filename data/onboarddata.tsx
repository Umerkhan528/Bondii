import { ImageSourcePropType } from "react-native";


export type onBoardType = {
    id: String,
    title:String,
    subTitle:String,
    imageUrl:ImageSourcePropType,
};

export const onBoard = [
    {
    id: "1",
    title:"Easy Rewards",
    subTitle:"Complete missions every month.",
    imageUrl:require("@/assets/images/png/Img_car4.png"),
    },
    {
        id: "2",
        title:"Locate & Capture",
        subTitle:"Locate & complete your mission.",
        imageUrl:require("@/assets/images/png/2.png")
    },
    {
        id: "3",
        title:"Easy Rank Up",
        subTitle:"Rank up & Win Bigger Rewards.",
        imageUrl:require("@/assets/images/png/3.png")
    },
];
