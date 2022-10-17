import { Appearance } from 'react-native';

const currentMode = Appearance.getColorScheme();

/**
 * Theme colors 
*/
interface Theme{
    primary: string;
    secondary: string;
    text: string;
    third: string;
}

/**
 * Light Mode theme 
*/
const LightTheme:Theme={
    primary: "#5529b7",
    secondary: "#00FF00",
    third: "white",
    text:'black'
}

/**
 * Dark Mode theme 
*/
const DarkTheme:Theme={
    primary: "white",
    secondary: "#00FF00",
    third: "#5529b7",
    text:'white'
}

/**
 * Avialable themes
*/
export const UIThemes = {
    light: LightTheme,
    dark: DarkTheme,
}

/**
 * App Theme for selecting theme based on current mode ( Dark or Light )
*/
let MyTheme : Theme;

if(currentMode !==null){
    MyTheme = UIThemes[currentMode];
}else{
    MyTheme = UIThemes.light;
}

/**
 * Returns the current theme and All avialable themes 
*/
export const getTheme = () => {
    return {
        currentTheme: MyTheme,
        allThemes: UIThemes
    }
}


/**
 * You can use this function to change the theme colors with your own application theme colors. 
 * Note - This function should be called before the app is rendered.
 * @param theme Theme
*/
export const setTheme = (theme:Theme) => {
    MyTheme = theme;
}



export default MyTheme;