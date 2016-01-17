import React from 'react';
import List from 'components/MangaList';
import Nav from 'components/Nav';

export default class Main extends React.Component {

  render() {

    return (
      <div className='Page'>
        <Nav />
        <List />
      </div>
    );
  }
}
