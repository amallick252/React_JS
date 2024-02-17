import {createContext, useContext} from 'react';

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})
//The initial value of the context is an object with three properties: themeMode, darkTheme, and lightTheme. defining object properties initially will help set initial values, if no value have been provided.

export const ThemeProvider = ThemeContext.Provider
// exports a ThemeProvider component, which is essentially the Provider component of the ThemeContext. It will be used to wrap parts of your application where you want to provide the theme context.

export default function useTheme(){
    return useContext(ThemeContext)
}
//It uses the useContext hook to consume the ThemeContext. When you call useTheme within a functional component, it will return the current context value, which includes themeMode, darkTheme, and lightTheme Also you dont need to import useContext and ThemeContext separately, you can import only the useTheme instead

// We are using .js file because we are not returning any jsx components. It is not compulsury to have one default export in a file and default exports are imported without {}(eg: import useTheme from './context/ThemeContext'), but named exported are imported within {}(eg: import ThemeProvider from './context/ThemeContext' )