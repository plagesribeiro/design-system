import { Meta, StoryObj } from '@storybook/react/types-6-0';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from './TextInput';

export default {
	title: 'Components/TextInput',
	component: TextInput.Root,
	args: {
		children: [
			<TextInput.Icon>
				<Envelope />
			</TextInput.Icon>,
			<TextInput.Input placeholder='Placeholder' />
		]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WhithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder='Placeholder' />
	}
};
