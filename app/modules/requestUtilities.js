import Rx from 'rx';
import _ from 'lodash';
import request from 'superagent';


let api = {
  baseHost: 'http://www.mangaeden.com/',
  imgHost: 'http://cdn.mangaeden.com/mangasimg/'
};

api.getData = function(options, callback) {
  request
    .get((!!options.img ? api.imgHost : api.baseHost) + options.data)
    .end((error, response) => callback(error, response && response.body));
};

api.getData$ = Rx.Observable.fromNodeCallback(api.getData.bind(api))

export default api
