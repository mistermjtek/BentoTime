import _ from 'lodash';
import React from 'react';
import MangaListItem from './MangaListItem';
import requestUtilities from '../modules/requestUtilities';

class List extends React.Component {

  constructor(props) {
    super();
    this.state = {
      manga: []
    };
  }

  componentDidMount() {
    requestUtilities.getData$({img: false, data: 'api/list/0/'}).subscribe({
      onNext: response => {
        this.setState({
          manga: response.manga.slice()
        })
      },
      onError: error => console.error(error),
      onCompleted: () => {}
    });
  }

  render() {
    let mangaList = _.map(this.state.manga, function(item){
      return <MangaListItem key={item.i} name={item.t} />
    });

    return (
      <ul>
        { mangaList.length > 0 ? mangaList : <h1>Loading Manga...</h1> }
      </ul>
    );
  }
}

export default List;
