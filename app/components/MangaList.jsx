import _ from 'lodash';
import React from 'react';
import MangaListItem from './MangaListItem';
import requestUtilities from '../modules/requestUtilities';

export default class List extends React.Component {
  constructor(props) {
    super();
    this.state = {
      manga: []
    };
  }

  componentDidMount() {
    requestUtilities.getData$( {img: false, data: 'api/list/0/'}).forEach( {
      onNext: response => {
        this.setState( {
          manga: response.manga.slice()
        })
      },
      onError: error => console.error(error),
      onCompleted: () => {}
    });
  }

  render() {
    let mangaList = _.map(this.state.manga, item => {
      return <MangaListItem key={item.i} name={item.t} />
    });

    return (
      <ul>
        {mangaList.length > 0 ? mangaList : <h1>Loading Manga...</h1>}
      </ul>
    );
  }
}
