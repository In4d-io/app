import { Meta, Story } from '@storybook/react/types-6-0'
import React, { CSSProperties } from 'react'

import { Text } from '../text/text'
import { Toolbar } from './toolbar'

export default {
  title: 'Primibites/Toolbar',
  component: Toolbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => <Toolbar {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithChildren = Template.bind({})
WithChildren.args = {
  children: <div>
    <Text>{'Child Element'}</Text>
  </div>,
}

export const WithContainerStyles = Template.bind({})
const containerStyles: CSSProperties = {
  width: 200,
  height: 400,
  backgroundColor: 'black',
}
WithContainerStyles.args = {
  containerStyles,
}