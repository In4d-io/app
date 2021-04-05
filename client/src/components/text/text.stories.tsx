import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Text } from './text'
import { TextProps } from './text.props'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
  title: 'Primitives/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'CTA',
}

export const Small = Template.bind({})
Small.args = {
  text: 'CTA',
  fontSize: "small"
}

export const Regular = Template.bind({})
Regular.args = {
  text: 'CTA',
  fontSize: 'regular'
}

export const Medium = Template.bind({})
Medium.args = {
  text: 'CTA',
  fontSize: "medium"
}

export const Large = Template.bind({})
Large.args = {
  fontSize: 'large',
  text: 'CTA',
}

export const XLarge = Template.bind({})
XLarge.args = {
  fontSize: 'xLarge',
  text: 'CTA',
}

export const XXLarge = Template.bind({})
XXLarge.args = {
  fontSize: 'xxLarge',
  text: 'CTA',
}