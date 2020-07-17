import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import InputText from "./InputText";

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf("PublishPost/InputText", module);

// Every story represents a state for our Button component
stories.add("basic", () => <InputText onClick={action("clicked!")}></InputText>);
stories.add("WithError", () => <InputText variant="borderRed" onClick={action("clicked!")}></InputText>);
stories.add("No Error", () => <InputText variant="NoBorder" onClick={action("clicked!")}></InputText>);