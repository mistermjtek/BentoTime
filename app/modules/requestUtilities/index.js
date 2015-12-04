import Rx from 'rx';
import _ from 'lodash';
import request from 'superagent';

const api = {
  baseHost: 'http://www.mangaeden.com/',
  imgHost: 'http://cdn.mangaeden.com/mangasimg/'
};

api.getData = (options, callback) => {
  request
    .get((options.img ? api.imgHost : api.baseHost) + options.data)
    .end((error, response) => callback(error, response && response.body));
};

api.getData$ = Rx.Observable.fromNodeCallback(_.bind(api.getData, api));

_.extend(api, {
  getList$: () => api.getData$({data: 'api/list/0/'}),
  getListByPage$: (page) => api.getData$({data: `api/list/0/?p=${page}`}),
  getManga$: (id) => api.getData$({data: `api/manga/${id}/`}),
  getChapter$: (id) => api.getData$({data: `api/chapter/${id}/`}),
  getImageUrl: (url) => api.imgHost + url
});

export default api;
