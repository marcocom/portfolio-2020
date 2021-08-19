import { ThemeProvider } from 'styled-components';
const fonts = {
    heading: ['Rubik', 'Helvetica', 'sans-serif'],
    body: ['Cooper Hewitt', 'Helvetica', 'sans-serif'],
};
const defaultTheme /*: CSSStyleDeclaration*/ = {
    font: {
        heading: fonts.heading.join(', ').toString(),
        body: fonts.body.join(', ').toString(),
    },
    hoverTransition: `
  color 1000ms ease-in,
  border 1000ms ease-in,
  background 2000ms ease-out,
  background-color 2000ms ease-out
  `,
    shadows: {
        boxShadow: `2px 2px 6px 0 rgba(0, 0, 0, 0.15);`,
        headerShadow: `0 0 6px rgba(0,0,0,0.25) ;`,
        insetShadow: `inset 2px 2px 6px rgba(0,0,0,0.15) ;`
    }
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
    },
};
// @ts-ignore
export const Theme = ({ currentTheme, children }) => (<ThemeProvider theme={defaultTheme}>
    <ThemeProvider current={currentTheme} theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  </ThemeProvider>);
