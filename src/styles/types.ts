import {ReactNode} from "react";

export type ThemeFonts = {
  heading: string[],
  body: string[]
}

export type ThemeProps = {
  currentTheme: string,
  children: ReactNode
}

