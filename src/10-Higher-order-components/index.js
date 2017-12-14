// ------------------------------------------------------------------- //
//  Higher-order Components
// ------------------------------------------------------------------- //
//  A higher-order component is a function that takes a component as
//  its argument and returns a new, enhanced component.
//
//  Objectives:
// • Recognize when to use the Higher-order component pattern
// • Identify some of the downsides of relying on HOCs
// • Recall alternative patterns that can be used instead of HOCs

import React from 'react';
import PropTypes from 'prop-types';

function withLocaleData(WrappedComponent) {
  return class extends React.Component {
    static childContextTypes = {
      currency: PropTypes.string,
      locale: PropTypes.string,
    };

    getChildContext() {
      return {
        currency: 'CAD',
        locale: 'en-CA',
      };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <ul>
        <li><Price value={20} /></li>
        <li><Price value={15} /></li>
      </ul>
    );
  }
}

export default withLocaleData(App);

class Price extends React.Component {
  static contextTypes = {
    currency: PropTypes.string,
    locale: PropTypes.string,
  };

  render() {
    const {value} = this.props;
    const {locale, currency} = this.context;
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
