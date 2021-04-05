import { CSSProperties } from 'react'

import { ColorNames } from '../../theme/colors'
import { FontSizeTypes, FontWeightTypes } from '../../theme/typography'

export type TextProps = {
  containerStyles?: CSSProperties,
  text?: string,
  tx?: string,
  textStyles?: CSSProperties,
  fontSize?: FontSizeTypes,
  fontWeight?: FontWeightTypes,
  fontColor?: ColorNames,
}