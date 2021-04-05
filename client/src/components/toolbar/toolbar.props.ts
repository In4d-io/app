import { CSSProperties } from 'react'
import { ControlPosition, DraggableBounds, PositionOffsetControlPosition } from 'react-draggable'

export interface ToolbarProps {
  ref?: React.MutableRefObject<null>,
  width?: number,
  height?: number,
  containerStyles?: CSSProperties,
  styles?: CSSProperties,
  children?: JSX.Element,
  scale?: number,
  axis?: 'both' | 'x' | 'y' | 'none',
  bounds?: DraggableBounds | string | false,
  defaultClassName?: string,
  defaultClassNameDragging?: string,
  defaultClassNameDragged?: string,
  defaultPosition?: ControlPosition,
  positionOffset?: PositionOffsetControlPosition,
  position?: ControlPosition,
}