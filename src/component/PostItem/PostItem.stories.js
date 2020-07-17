import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import PostItem from "./PostItem";

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf("PublishPost/List Post Item", module);

// Every story represents a state for our Button component
stories.add("Empty List", () => 
                        <PostItem
                        
                         ></PostItem>
);