import Rx from 'rx';
import requestUtilities from '../../app/modules/requestUtilities.js';

describe('Request Utilities', function() {

  it('should get the manga list with callback javascript', function(done) {
    requestUtilities.getData({img: false, data: 'api/list/0/'}, function(error, response) {
      expect(error).toBeNull();
      expect(typeof response).toBe('object');
      expect(JSON.stringify(response)).toMatch(/shokugeki-no-soma/);
      done();
    });
  });

  it('should get the manga list with reactive javascript', function(done) {
    requestUtilities.getData$({img: false, data: 'api/list/0/'}).forEach({
      onNext: response => {
        expect(typeof response).toBe('object');
        expect(JSON.stringify(response)).toMatch(/shokugeki-no-soma/);
      },
      onError: error => console.error(error),
      onCompleted: () => done()
    });
  });
});