import { GlobalStyle } from "./globalStyle"

const size = {
    xs:       '0px',
    mobileS:  '320px',
    mobileM:  '375px',
    mobileL:  '425px',
    tabletS:  '600px',
    tablet:   '768px',
    laptop:   '1024px',
    laptopM:  '1200px',
    laptopL:  '1440px',
    laptopXL:  '1500px',
    desktop:  '2560px',
}

const theme = {
  breakpoints: {
    xs:       `(min-width: ${size.xs})`,
    mobileS:  `(min-width: ${size.mobileS})`,
    mobileM:  `(min-width: ${size.mobileM})`,
    mobileL:  `(min-width: ${size.mobileL})`,
    tabletS:  `(min-width: ${size.tabletS})`,
    tablet:   `(min-width: ${size.tablet})`,
    laptop:   `(min-width: ${size.laptop})`,
    laptopM:  `(min-width: ${size.laptopM})`,
    laptopL:  `(min-width: ${size.laptopL})`,
    laptopXL: `(min-width: ${size.laptopXL})`,
    desktop:  `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  }
}

export {theme, GlobalStyle};