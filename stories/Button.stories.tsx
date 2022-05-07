import React from "react"
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button} from "../app/components/Button";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default:
  ComponentStory<typeof Button> = () => <Button variant="default">Button</Button>

export const Primary:
  ComponentStory<typeof Button> = () => <Button variant="primary">Button</Button>;

export const Secondary:
  ComponentStory<typeof Button> = () => <Button variant="secondary">Button</Button>;

export const Danger:
  ComponentStory<typeof Button> = () => <Button variant="danger">Button</Button>;
