import React, { useContext } from 'react'
// import {dark, light } from '../themes';
import { ThemeProvider as Theme, createTheme } from '@mui/material';
// import { AppContext } from './AppContextProvider';
// import { THEMES } from '../utils/consts';

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({children}: Props) => {

//   const { state } = useContext(AppContext)
//   let currentTheme = undefined

//   switch (state.theme) {
//     case THEMES.LIGHT:
//       currentTheme = createTheme(light)
//       break
//     case THEMES.DARK:
//       currentTheme = createTheme(dark)
//       break
//     case THEMES.PINK:
//       currentTheme = createTheme(pink)
//       break
//     default:
//       currentTheme = createTheme(light)
//       break
//   }
  
    const currentTheme = createTheme()

    return (
        <Theme theme={currentTheme}>
            {children}
        </Theme>
    )
}

export default ThemeProvider

