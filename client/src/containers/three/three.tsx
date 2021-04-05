import React from 'react'

import { ShapeTools } from '../../components/shape-tools/shape-tools'

interface ThreeProps { }

export const Three: React.FC<ThreeProps> = props => {
  console.log("RENDERING THREE")
  return (
    <div>
      <ShapeTools />
    </div>
  )
}