type ButtonDimensions = {
  width: number,
  height: number,
}

export const buttonSizes: Record<string, ButtonDimensions> = {
  small: {
    width: 100,
    height: 30,
  },
  regular: {
    width: 140,
    height: 40,
  },
  medium: {
    width: 160,
    height: 45,
  },
  large: {
    width: 180,
    height: 50,
  },
  xLarge: {
    width: 200,
    height: 55,
  },
  xxLarge: {
    width: 300,
    height: 60,
  },
  xxxLarge: {
    width: 400,
    height: 80,
  },
  xxxxLarge: {
    width: 500,
    height: 100,
  },
}

export type ButtonSizes = keyof typeof buttonSizes