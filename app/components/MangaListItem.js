import _ from 'lodash';
import React from 'react';
import MangaListItem from './MangaListItem.js';
import requestUtilities from '../modules/requestUtilities.js';

class List extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default List;
