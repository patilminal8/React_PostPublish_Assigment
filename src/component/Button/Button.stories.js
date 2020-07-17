import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

// Main Story Component
const stories = storiesOf("PublishPost/Button", module);

stories.addDecorator(withProvider).add("default", () => 
    <Button onClick={action("clicked!")}>Publish</Button>);

stories.add("default disabled", () => 
    <Button onClick={action("clicked!")} disabled>Add Post</Button>);

stories.add("Active Button", () => 
    <Button onClick={action("clicked!")} variant="buttonActive">Add Post</Button>);

stories.add("primary disabled", () => (
  <Button onClick={action("clicked!")} variant="primary" disabled>
    Button
  </Button>
));

stories.add("Non Active Button", () => 
<Button onClick={action("clicked!")} variant="buttonNotActive">Publish</Button>);

stories.add("secondary disabled", () => (
  <Button onClick={action("clicked!")} variant="secondary" disabled>
    Publish
  </Button>
));