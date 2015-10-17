import _ from 'lodash';
import React from 'react';
import requestUtilities from '../modules/requestUtilities';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.name}
        <img src={requestUtilities.getImageUrl(this.props.image)} />
      </li>
    );
  }
}
