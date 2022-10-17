import React from 'react';
import { View, Modal, StyleSheet, Text, ActivityIndicator } from 'react-native';
import MyTheme from '../../utils/theme';

interface Props {
    /**
     * Toggles the visibilty of modal 
     * @param bool modalVisible
    */
    modalVisible: boolean;

    /**
     * Color of Activity Indicator (loading circle)
     * @param string color
    */
    color: string;

    /**
     * Text to display with the loading circle
     * @param string task
    */
    task: string;

    /**
     * Font family of the loading text ( task or label )
     * @param string fontFamily
    */
    fontFamily: string;
}

export default function LoadingModal(props:Props) {
    
    const fontFamily = props.fontFamily ? props.fontFamily : 'sans-serif';
    const color = props.color ? props.color : MyTheme.primary;

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            statusBarTranslucent={true}>
                
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ActivityIndicator size="large" color={props.color} />
                    {props.task ?
                        <Text style={[styles.modalText,{fontFamily:fontFamily}]}>{props.task}</Text>
                        :
                        <Text style={[styles.modalText,{fontFamily:fontFamily}]}>Loading..</Text>
                    }
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0008'

    },
    modalView: {
        margin: 20,
        width: 200,
        height: 70,
        backgroundColor: MyTheme.third,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
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

    modalText: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 17,
        marginLeft: 15,
    }
});