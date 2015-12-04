import _ from 'lodash';
import React from 'react';
import requestUtilities from 'modules/requestUtilities';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-item">
        <h1 className="list-item__name">{this.props.name}</h1>
        <img className="list-item__image" src={requestUtilities.getImageUrl(this.props.image)} />
      </li>
    );
  }
}
