import { CSSProperties } from 'react'

const DIMENSIONS = {
  width: '300px',
  height: 160,
}


const CONTAINER: CSSProperties = {
  position: 'relative',
  ...DIMENSIONS,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const INNER_CONTAINER: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  height: '100%',
}

const GO_CONTAINER: CSSProperties = {
  display: 'inline-block',
}

const FOURJ_CONTAINER: CSSProperties = {
  display: 'inline-block',
}

const styles = {
  container: CONTAINER,
  goContainer: GO_CONTAINER,
  four4Container: FOURJ_CONTAINER,
  innerContainer: INNER_CONTAINER,
}

export default styles