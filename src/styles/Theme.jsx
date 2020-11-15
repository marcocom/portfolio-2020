import React from 'react'
import { ThemeProvider } from 'styled-components'
// import { assetImages } from '@src/assets/images'

const fonts = {
  cursive: ['Rubik', 'Helvetica', 'serif'],
  heading: ['Rubik', 'Helvetica', 'serif'],
  body: ['Karla', 'Helvetica', 'sans-serif'],
};

const theme = {
  font: {
    cursive: fonts.cursive.join(', '),
    heading: fonts.heading.join(', '),
    body: fonts.body.join(', '),
  },
  hoverTransition: `
  color 1000ms ease-in,
  border 1000ms ease-in,
  background 2000ms ease-out,
  background-color 2000ms ease-out
  `,
};

const lightTheme = {
  color: {
    text: '#0e0e0e',
    textSecondary: '#777777',
    bg: '#ffffff',
    imgBg: '#e9e9e9',
    bgCard: '#FFFFFF',
    primary: '#0F97DB',
    primaryDarkened: '#0d8bca',
    // backgroundImage: assetImages.wood7,
  },
};
const darkTheme = {
  color: {
    text: '#ffffff',
    textSecondary: '#AAAAAA',
    bg: '#151515',
    bgCard: '#1D1D1D',
    imgBg: '#2e2e2e',
    primary: '#0F97DB',
    primaryDarkened: '#0d8bca',
    // backgroundImage: assetImages.wood2,
  },
};

export const Theme = ({ colorTheme, children }) => (
  <ThemeProvider theme={theme}>
    <ThemeProvider current={colorTheme} theme={colorTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  </ThemeProvider>
);
