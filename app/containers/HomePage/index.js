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
      columns: [{
        name: 'id',
        title: 'Id',
      }, {
        title: 'Name',
        headerCls: 'custom-grid-header-cls',
        headerRenderer: (index, columns, data) => {
          return (
            <span>Testing header renderer</span>
          )
        },
        columns: [{
          name: 'firstName',
          title: 'First Name'
        }, {
          name: 'middleName',
          title: 'Middle Name',
        }, {
          name: 'lastName',
          title: 'Last Name',
        }],
      }, {
        title: 'Header Level 1',
        columns: [{
          title: 'Sub Header Level 1',
          columns: [{
            title: 'Sub Header Level 1.1',
          }, {
            title: 'Sub Header Level 1.2',
          }],
        }, {
          title: 'Sub Header Level 2',
          columns: [{
            title: 'Sub Header Level 2.1',
          }, {
            title: 'Sub Header Level 2.2',
          }],
        }],
      }],
    };
  }

  render() {
    return (
      <Grid config={this.getConfig()} />
    );
  }
}
