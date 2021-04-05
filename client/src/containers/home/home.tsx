import React from 'react'
import { useHistory } from 'react-router'

import { Button } from '../../components/button/button'
import { Name } from '../../components/name/name'
import { Text } from '../../components/text/text'
import { APP_ROUTES } from '../../Routes'
import { spacing } from '../../theme/spacing'
import { DesktopProps, HomeProps } from './home.props'
import styles from './styles'


const Desktop: React.FC<DesktopProps> = props => {
  const TOOLS = APP_ROUTES.filter(route => route.isTool)
  const history = useHistory()

  return (
    <div style={styles.desktopContainer}>
      {/* Left container */}
      <div style={styles.leftContainer}>
        <div style={styles.innerLeftContainer}>
          <div style={styles.brandingContaienr}>
            <Name />
            <Text
              tx={'home.brandDescription'}
              fontSize={'medium'}
              containerStyles={{
                textAlign: 'left',
              }}
              textStyles={{
                lineHeight: '1.7em',
              }}
            />
          </div>
        </div>
      </div>
      {/* Right container */}
      <div style={styles.rightContainer}>
        {TOOLS.map(tool => {
          return (
            <Button
              onClick={() => {
                history.push(`${tool.path}`)
              }}
              text={'Three.JS'}
              color={'white'}
              size={'xxxLarge'}
              styles={{
                borderRadius: 20,
                boxShadow: '0 0 20px rgba(0,0,0,0.05)',
                marginTop: spacing.xLarge,
                height: 100,
              }}
            >
              <Text
                fontColor={'darkGray'}
                fontSize={'medium'}
                fontWeight={'medium'}
                textStyles={{
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
                text={tool.name}
              />
            </Button>
          )
        })}
      </div>
    </div>
  )
}


export const Home: React.FC<HomeProps> = props => {
  return (
    <div className="home-container">
      {/* Desktop */}
      <div className="desktop-container">
        <Desktop />
      </div>

      {/* Mobile */}
      <div className="mobile-container">

      </div>

    </div>
  )
}