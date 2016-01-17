import React from 'react';

export default class Nav extends React.Component {

  render() {

    return (
      <div className='nav'>
      	<input type='search' className='search'/>
      	<div className='button-group'>
      		<button className='nav-button'> Favorites </button>
      		<button> Settings </button>
      	</div>
      </div>
    );
  }
}
