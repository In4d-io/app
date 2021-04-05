import './button.css'

import React from 'react'
import { CSSProperties } from 'react'

import { palette } from '../../theme/colors'
import { buttonSizes } from '../../theme/cta'
import { Text } from '../text/text'
import { ButtonProps } from './button.props'

export const Button: React.FC<ButtonProps> = props => {
  const {
    size,
    styles,
    text,
    color,
    children,
    onClick,
  } = props

  const buttonDimensions = size ? buttonSizes[size] : buttonSizes.regular
  const sizeStyles: CSSProperties = {
    ...buttonDimensions,
  }

  const colorStyles: CSSProperties = {
    backgroundColor: color ? palette[color] : palette.primary
  }

  const defaultStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const containerStyles = {
    ...defaultStyles,
    ...sizeStyles,
    ...colorStyles,
    ...styles,
  }

  const content = children || <Text text={text} />

  return (
    <div
      className={'button'}
      onClick={() => {
        if (onClick) {
          onClick()
        } else {
          console.info("No onClick hanlder passed to button")
        }
      }}
      style={containerStyles}
    >
      {content}
    </div>
  )
}