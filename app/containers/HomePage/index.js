/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from 'react-grid';
import messages from './messages';
import './styles.css';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  getConfig() {
    return {
      cls: 'grid-cls',
      data: [{
        id: 1,
        firstName: 'Riddhi',
        lastName: 'Thakkar',
        physics: 20,
        chemistry: 34,
        math: 89,
      }, {
        id: 2,
        firstName: 'Parth',
        lastName: 'Thakkar',
        physics: 20,
        chemistry: 34,
        math: 89,
      }],
      columns: [{
        name: 'id',
        title: 'Id',
      }, {
        title: 'Name',
        columns: [{
          name: 'firstName',
          title: 'First Name'
        }, {
          name: 'lastName',
          title: 'Last Name',
        }],
      }, {
        title: 'Scorecard',
        columns: [{
          title: 'Physics',
          name: 'physics',
        }, {
          title: 'Chemistry',
          name: 'chemistry',
        }, {
          title: 'Math',
          name: 'math',
        }]
      }],
    };
  }

  render() {
    return (
      <Grid config={this.getConfig()} />
    );
  }
}
