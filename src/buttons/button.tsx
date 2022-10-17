import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import MyTheme from '../../utils/theme';

interface ButtonProps {
    onPress: () => void;
    label?: string;
    style?: object;
    outline?: boolean;
}


export const FlatButton=(props:ButtonProps)=>{
    if(props.outline){
        return(
            <TouchableOpacity onPress={props.onPress} style={[styles.flatButtonOutline,props.style]}>
                <Text>{props.label ? props.label : "Submit"}</Text>
            </TouchableOpacity>
        )

    }else{
        return(
            <TouchableOpacity onPress={props.onPress} style={[styles.flatButton,props.style]}>
                <Text>{props.label ? props.label : "Submit"}</Text>
            </TouchableOpacity>
        )
    }

}

export const RoundButton = (props:ButtonProps) => {
    if(props.outline){
        return(
            <TouchableOpacity onPress={props.onPress} style={[styles.roundButtonOutline,props.style]}>
                <Text>{props.label ? props.label : "Submit"}</Text>
            </TouchableOpacity>
        )   
    }else{
        return(
            <TouchableOpacity onPress={props.onPress} style={[styles.roundButton,props.style]}>
                <Text>{props.label ? props.label : "Submit"}</Text>
            </TouchableOpacity>
        )   
    }

}


const basicFullWidth={
    padding:15,
    borderRadius:5,
    marginTop:20,
    marginVertical:10,
    width:"100%",
    justifyContent:'center',
    alignItems:'center'
}

const styles = StyleSheet.create({


    flatButton:{
       ...basicFullWidth,
        backgroundColor:MyTheme.primary,
        borderRadius:5,
    },

    flatButtonOutline:{
        ...basicFullWidth,
        borderWidth:1,
        borderColor:`white`,
        backgroundColor:`transparent`,
        borderRadius:5,
    },



    roundButton:{
        ...basicFullWidth,
        backgroundColor:MyTheme.primary,
        borderRadius:50,
    },
    roundButtonOutline:{
       ...basicFullWidth,
        borderWidth:1,
        borderColor:`white`,
        backgroundColor:`transparent`,
        borderRadius:50,
    }

})
