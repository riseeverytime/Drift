import '../styles/globals.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { useState } from 'react'
import type { AppProps as NextAppProps } from "next/app";

export type ThemeProps = {
  theme: "light" | "dark" | string,
  changeTheme: () => void
}

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

export type DriftProps = ThemeProps

function MyApp({ Component, pageProps }: AppProps<ThemeProps>) {
  const [themeType, setThemeType] = useState<string>(typeof window !== 'undefined' ? localStorage.getItem('drift-theme') || 'light' : 'light')
  const changeTheme = () => {
    const newTheme = themeType === 'dark' ? 'light' : 'dark'
    localStorage.setItem('drift-theme', newTheme)
    setThemeType(newTheme)
  }

  return (
    <GeistProvider themeType={themeType} >
      <CssBaseline />
      <Component {...pageProps} theme={themeType} changeTheme={changeTheme} />
    </ GeistProvider>
  )
}

export default MyApp
