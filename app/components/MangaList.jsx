import _ from 'lodash';
import React from 'react';
import MangaListItem from './MangaListItem';
import requestUtilities from '../modules/requestUtilities';

export default class List extends React.Component {
  constructor(props) {
    super();
    this.state = {
      manga: [],
      search: '',
      filtered: []
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

  filter(item) {
    var search = this.state.search;
    var check = function(toCheck) {
      if(typeof toCheck === 'string' || typeof toCheck === 'number'){
        return Boolean(toCheck.match(new RegExp(search, 'ig')));
      }
      if(typeof toCheck === 'object') {
        return _.some(toCheck, function(item) {
          return check(item);
        });
      }
      return false;
    };
    return check([item.title, item.author.name, item.date, item.tags]);
  }

  _onSearchUpdate(event) {
    this.setState({search: event.target.value}, _.bind(function(){
      this.setState({
        filtered: _.filter(this.state.unfiltered, _.bind(this.filter, this))
      });
    }, this));
  }

  _resetSearch() {
    this.setState({search: ''}, _.bind(function(){
      this.setState({
        filtered: _.filter(this.state.unfiltered, _.bind(this.filter, this))
      });
    }, this));
  }


  render() {
    let mangaList = _.map(this.state.manga, item => {
      return <MangaListItem key={item.i} name={item.t} />
    });

    return (
      <div className="searchWrapper">
        <input type="search" placeholder="Search for a manga" className="search" value={this.state.search} onChange={this._onSearchUpdate} />
      </div>
      <ul>
        {mangaList.length > 0 ? mangaList : <h1>Loading Manga...</h1>}
      </ul>
    );
  }
}
