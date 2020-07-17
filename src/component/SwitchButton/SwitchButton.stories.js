import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import SwitchButton from './SwitchButton';
import { mapStateToProps, mapDispatchToProps } from './SwitchButton';

const stories = storiesOf("PublishPost/SwitchButton", module);

stories.add("basic", () => <SwitchButton />);