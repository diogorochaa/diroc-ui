import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@dr-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text> This is a Box component. </Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
