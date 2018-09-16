import React from 'react';
import PropTypes from 'prop-types';
import { registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const FormNestedHead = ({ label, addItem }) => null;

FormNestedHead.propTypes = {
  label: PropTypes.string,
  addItem: PropTypes.func,
};

registerComponent('FormNestedHead', FormNestedHead);
