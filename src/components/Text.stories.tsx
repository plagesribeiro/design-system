import { Meta, StoryObj } from '@storybook/react/types-6-0';
import { Text, TextProps } from './Text';

export default {
	title: 'Components/Text',
	component: Text,
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
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: <p>Paragraph example</p>
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
