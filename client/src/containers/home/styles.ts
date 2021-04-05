import { CSSProperties } from 'react'

const DESKTOP_CONTAINER: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.03)',
}

const LEFT_CONTAINER: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const INNER_LEFT_CONTAINER: CSSProperties = {
  margin: 'auto',
  width: '70%',
  maxWidth: 500,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}

const BRANDING_CONTAINER: CSSProperties = {
  height: 300,
  width: '100%',
}

const RIGHT_CONTAINER: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '50%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

}

const styles = {
  desktopContainer: DESKTOP_CONTAINER,
  leftContainer: LEFT_CONTAINER,
  innerLeftContainer: INNER_LEFT_CONTAINER,
  brandingContaienr: BRANDING_CONTAINER,
  rightContainer: RIGHT_CONTAINER,
}

export default styles