import _ from 'lodash';
import React from 'react';
import MangaListItem from 'components/MangaListItem';
import requestUtilities from 'modules/requestUtilities';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manga: []
    };
  }

  componentDidMount() {
    requestUtilities.getListByPage$(0).forEach( {
      onNext: response => {
        this.setState( {
          manga: response.manga.slice()
        });
      },
      onError: error => console.error(error),
      onCompleted: () => {}
    });
  }

  render() {
    let mangaList = _.map(this.state.manga, item => {
      if(item.im) {
        return <MangaListItem key={item.i} name={item.t} image={item.im} />;
      }
    });

    return (
      <ul className="manga-list">
        {mangaList.length > 0 ? mangaList : <h1>Loading Manga...</h1>}
      </ul>
    );
  }
}
