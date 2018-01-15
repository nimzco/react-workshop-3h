// ------------------------------------------------------------------- //
//  Higher-order Components
// ------------------------------------------------------------------- //
//  A higher-order component is a function that takes a component as
//  its argument and returns a new, enhanced component.
//
//  Instructions:
// • Create a higher-order component function that takes a component
//   as it's argument and enhances it by passing it the `localeData`
//   information as props

import React from 'react';
import PropTypes from 'prop-types';

const localeData = {
  currency: 'CAD',
  locale: 'en-CA',
};

class Price extends React.Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const {value, locale, currency} = this.props;
    const localizedPrice = value.toLocaleString(locale, {
      style: 'currency',
      currency,
    })

    return (
      <span>
        {localizedPrice}
      </span>
    );
  }
}

// Once you've created your HOC, store a reference to your new
// enhanced Price component and update the JSX tags below to use it
class Exercise extends React.Component {
  render() {
    return (
      <ul>
        <li><Price value={20} currency="CAD" locale="en-CA" /></li>
        <li><Price value={15} currency="CAD" locale="en-CA" /></li>
      </ul>
    );
  }
}

export default Exercise;
