import { CSSProperties } from 'react'

import { ColorNames } from '../../theme/colors'
import { ButtonSizes } from '../../theme/cta'

export type ButtonProps = {
  size?: ButtonSizes,
  styles?: CSSProperties,
  text: string,
  color?: ColorNames,
  onClick?: Function,
}