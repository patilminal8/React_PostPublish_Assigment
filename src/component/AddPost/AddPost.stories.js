import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import AddPost from './AddPost';

const stories = storiesOf("PublishPost/AddPost", module);

stories.add("basic", () => <AddPost />);