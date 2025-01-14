import React from "react";
import { StyleSheet, View, Platform } from "react-native";

export default () => {
    return <View style={style.shadow}></View>;
};

const style = StyleSheet.create({
    shadow: {
        backgroundColor: "#fff",
        width: 200,
        height: 200,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 20,
            },
        }),
    },
});
