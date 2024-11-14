"use client"
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes';
import React from 'react'

/* interface CustomThemeProviderProps {
    children: React.ReactNode
    }
 */
const ThemeProvider = ({children, ...props}:ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>{children}
    </NextThemesProvider>
  )
}

export default ThemeProvider