import {createContext, useContext} from 'react';

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})
//The initial value of the context is an object with three properties: themeMode, darkTheme, and lightTheme.

export const ThemeProvider = ThemeContext.Provider
// exports a ThemeProvider component, which is essentially the Provider component of the ThemeContext. It will be used to wrap parts of your application where you want to provide the theme context.

export default function useTheme(){
    return useContext(ThemeContext)
}
//It uses the useContext hook to consume the ThemeContext. When you call useTheme within a functional component, it will return the current context value, which includes themeMode, darkTheme, and lightTheme

// We are using .js file because we are not returning any jsx components