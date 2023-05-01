import { StoryFn, Meta } from '@storybook/react';

import { Typography, TypographyProps } from "./Typography";

const TypographiesProps: TypographyProps[] = [
	{
		children: 'title-1',
		variant: 'title-1'
	}
]

const TypographyTemplate: StoryFn<typeof Typography> = (args) => <Typography {...args} />

const typographyProps:TypographyProps = {
	children: 'Typography',
	tag: 'div',
	variant: 'title-1'
}

export const Playground: StoryFn<typeof Typography> = TypographyTemplate.bind({})
Playground.args = typographyProps

export const AllTypographies = () => (
	<>
		{
			TypographiesProps.map((typographyProps) => (
				<Typography key={typographyProps.variant} {...typographyProps} />
			))
		}
	</>
)

export default {
	component: Typography,
	title: 'ui/typography'
} as Meta<typeof Typography>