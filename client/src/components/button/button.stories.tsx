import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Button } from './button'
import { ButtonProps } from './button.props'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
  title: 'Primitives/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = {
  size: "small"
}

export const Regular = Template.bind({})
Regular.args = {
  size: 'regular'
}

export const Medium = Template.bind({})
Medium.args = {
  size: "medium"
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const XLarge = Template.bind({})
XLarge.args = {
  size: 'xLarge',
}

export const XXLarge = Template.bind({})
XXLarge.args = {
  size: 'xxLarge',
}

export const XXXLarge = Template.bind({})
XXXLarge.args = {
  size: 'xxxLarge',
}

export const XXXXLarge = Template.bind({})
XXXXLarge.args = {
  size: 'xxxxLarge',
}