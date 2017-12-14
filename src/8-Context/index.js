// ------------------------------------------------------------------- //
//  Context
// ------------------------------------------------------------------- //
//  Context is used to transparently pass data down the component tree
//  to deeply nested child components.
//
//  Objectives:
// • Understand how to use context
// • Recgonize why not to use context in certain situations
//
//  Instructions:
// • Annotate components using the childContextTypes and contextTypes static properties
// • Populate context values using the getChildContext method
// • Update component implementation to rely on context instead of props

import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  state = {
    currency: 'CAD',
    locale: 'en-CA',
  };

  render() {
    const {locale, currency} = this.state;

    return (
      <div>
        <code>
          {`
            <Price value={20} locale={locale} currency={currency} />
            <Price value={15} locale={locale} currency={currency} />
          `}
        </code>
        <ul>
          <li><Price value={20} locale={locale} currency={currency} /></li>
          <li><Price value={15} locale={locale} currency={currency} /></li>
        </ul>
      </div>
    );
  }
}

class Price extends React.Component {
  static propTypes = {
    value: PropTypes.number,
  };

  render() {
    const {value, locale, currency} = this.props;
    const localizedPrice = value.toLocaleString(locale, {
      style: 'currency',
      currency,
    });

    return (
      <span>
        {localizedPrice}
      </span>
    );
  }
}
