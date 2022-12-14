import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@dr-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "md",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: { type: "inline-radio" },
    },
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
