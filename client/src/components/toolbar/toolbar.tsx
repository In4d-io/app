import React from 'react'
import Draggable from 'react-draggable'

import { ToolbarProps } from './toolbar.props'

export function Toolbar(props: ToolbarProps) {
  const { children } = props

  const defaultStyles = {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    borderRadius: 10,
  }

  const contStyles = {
    ...defaultStyles,
    ...props.containerStyles,
  }

  return (
    <Draggable
      scale={1}
    >
      <div style={contStyles}>
        {children ? children : <div />}
      </div>
    </Draggable>
  )
}