import React, { useEffect } from "react";
import { View,TouchableOpacity,Text,Modal,StyleSheet, Dimensions } from "react-native";

interface ToastProps{
    visible:boolean;
    message:string;
    duration?:number;
    toastStyle?:object;
}

export default function ProtonicToast(props:ToastProps) {


    useEffect(()=>{
        setTimeout(() => {
            setVisible(false)
        },props.duration || 2000);
    },[])


    const [visible,setVisible] = React.useState(props.visible);



    return(
        <Modal 
            animationType="fade"
            transparent={true}
            visible={visible}
            statusBarTranslucent={true}>
                <View style={styles.centeredView}>
                    <View style={[styles.toastView,props.toastStyle]}>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={{fontSize:15}}>{props.message}</Text>
                    </View>
                </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'transparent',
        paddingBottom:50,
    },
    toastView: {
        margin: 20,
        padding:10,
        maxWidth: Dimensions.get('window').width - 90,
        paddingHorizontal:20,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,   

    },
})

