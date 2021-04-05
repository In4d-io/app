import React, { CSSProperties } from 'react'

import { translate } from '../../i18n/translate'
import { palette } from '../../theme/colors'
import { fontSizes, fontWeights } from '../../theme/typography'
import styles from './styles'
import { TextProps } from './text.props'

export const Text: React.FC<TextProps> = props => {
  const {
    text,
    tx,
    containerStyles,
    textStyles,
    fontSize,
    fontWeight,
    fontColor,
    children,
  } = props

  const containerStyle: CSSProperties = {
    ...styles.container,
    ...containerStyles,
  }

  const typographyStyles: CSSProperties = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: fontSize ? fontSizes[fontSize] : fontSizes.regular,
    fontWeight: fontWeight ? fontWeights[fontWeight] : fontWeights.regular,
    color: fontColor ? palette[fontColor] : palette.darkGray,
  }

  const textStyle: CSSProperties = {
    ...styles.text,
    ...textStyles,
    ...typographyStyles,
  }

  const i18nText = tx && translate(tx, {})

  return (
    <div style={containerStyle}>
      <p style={textStyle}>
        {i18nText || text || children}
      </p>
    </div>
  )
}