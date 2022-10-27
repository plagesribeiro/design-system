import { Meta, StoryObj } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from './Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Loren ipsum',
		size: 'md'
	},
	argTypes: {
		size: {
			control: {
				type: 'inline-radio',
				options: ['sm', 'md', 'lg']
			}
		}
	}
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: <h1>Heading with H1</h1>
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		},
		asChild: {
			table: {
				disable: true
			}
		}
	}
};
