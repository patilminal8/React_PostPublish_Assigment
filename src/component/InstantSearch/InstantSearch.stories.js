import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import InstantSearch from './InstantSearch';

const stories = storiesOf("PublishPost/InstantSearch", module);

stories.add("basic", () =>  <InstantSearch />);
