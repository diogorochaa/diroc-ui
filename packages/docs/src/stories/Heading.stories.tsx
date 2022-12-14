import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@dr-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Heading",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o componente é renderizado como "h2". Mas você pode alterar isso usando a prop "as".',
      },
    },
  },
};
