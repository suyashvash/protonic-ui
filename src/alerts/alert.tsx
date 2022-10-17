import React from "react";
import { View,TouchableOpacity,Text,Modal,StyleSheet, Dimensions } from "react-native";
import MyTheme from "../../utils/theme";



/**
* Alert props to pass the customizations 
* @param interface props
*/
interface AlertProps{
    /**
    * Sets the modal or alert's visibility
    * @param boolean visible
    */
    visible:boolean;

    /**
    * Title of the alert box such as 'Registeration' or 'Login'
    * @param string title
    */
    title:string;

    /**
    * Message to show in alert box 
    * @param string message
    */
    message:string;

    /**
    * Function to call on `submit` button press
    * @param void onSubmit
    */
    onSubmit:()=>void;

    /**
    * Function to call on `Cancel` button press
    * @param void onCancel
    */
    onCancel:()=>void;

    /**
    * Text to show on `submit` button instead of submit
    * @param string submitText
    */
    submitText?:string;

    /**
    * Text to show on `Cancel` button instead of Cancel
    * @param string cancelText
    */
    cancelText?:string;

    /**
    * Custom style for submit button, may be your own color or somthing
    * @param object submitStyle
    */
    submitStyle?:object;

    /**
    * Boolean to show or hide the cancel button
    * @param boolean showCancel
    */
    showCancel:boolean;
}

export default function ProtonicAlert(props:AlertProps) {
    
    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={props.visible}
            statusBarTranslucent={true}>
                
            <View style={styles.centeredView}>
                <View style={styles.alertView}>
                    <Text style={{width:'100%',fontSize:18,fontWeight:'bold',padding:20}}>{props.title}</Text>
                    <Text style={{width:'100%',paddingHorizontal:20}}>{props.message}</Text>
                    <View style={{flexDirection:'row',width:'100%',justifyContent: props.showCancel ? 'center' : 'flex-end',marginTop:20,padding:10,alignItems:'center'}}>
                        {props.showCancel &&
                            <TouchableOpacity onPress={props.onCancel} style={styles.cancelButton}>
                            <Text>{props.cancelText? props.cancelText: `Cancel`}</Text>
                            </TouchableOpacity>
                        }
                  

                        <TouchableOpacity onPress={props.onSubmit} style={[styles.submitButton,props.submitStyle]}>
                            <Text style={[{color:'white'},props.submitStyle]}>{ props.submitText?props.submitText: `OK`}</Text>
                        </TouchableOpacity>

                    </View>
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
    alertView: {
        margin: 20,
        width: Dimensions.get('window').width - 90,
        paddingBottom:10,
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

    cancelButton:{
        padding:10,
        backgroundColor:'whitesmsubmite',
        borderRadius:5,
        width:'45%',
        marginRight:10,
        borderColor:'lightgrey',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },

    submitButton:{
        padding:10,
        backgroundColor:MyTheme.primary,
        borderRadius:5,
        width:'45%',
        borderColor:'lightgrey',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    }
});