import React from 'react'

import { Text } from '../text/text'
import { NameProps } from './name.props'
import styles from './styles'


export const Name: React.FC<NameProps> = props => {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.goContainer}>
          <Text
            tx={'home.brandNameGo'}
            fontSize={'xxLarge'}
            fontWeight={'light'}
            fontColor={'darkGray'}
          />
        </div>
        <div style={styles.four4Container}>
          <Text
            text={'4D'}
            fontSize={'xxLarge'}
            fontWeight={'semiBold'}
            fontColor={'darkGray'}
          />
        </div>
      </div>
    </div>
  )
}