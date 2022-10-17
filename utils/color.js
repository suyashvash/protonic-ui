import { Appearance } from 'react-native';

const currentMode = Appearance.getColorScheme();

const LightTheme={
    primary: "#FF0000",
    secondary: "#00FF00",
}

const DarkTheme={
    primary: "#0000FF",
    secondary: "#FF00FF",
}

export const UIThemes = {
    light: LightTheme,
    dark: DarkTheme,
}

let MyTheme;

if(currentMode !==null){
    MyTheme = UIThemes[currentMode];
}else{
    MyTheme = UIThemes.light;
}


export default MyTheme;