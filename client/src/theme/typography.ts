export const fontSizes = {
  xSmall: 9,
  small: 10,
  regular: 12,
  medium: 15,
  large: 20,
  xLarge: 25,
  xxLarge: 120,
}

export const fontWeights = {
  light: 100,
  regular: 300,
  medium: 400,
  semiBold: 600,
  bold: 800,
}

export type FontSizeTypes = keyof typeof fontSizes
export type FontWeightTypes = keyof typeof fontWeights