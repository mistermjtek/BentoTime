import Rx from 'rx';
import requestUtilities from '../../app/modules/requestUtilities.js';

describe('Request Utilities', function() {

  it('should run a callback request', function(done) {
    requestUtilities.getData({data: 'api/list/0/?p=0'}, function(error, response) {
      expect(error).toBeNull();
      expect(typeof response).toBe('object');
      expect(JSON.stringify(response)).toMatch(/kanai-kun/);
      done();
    });
  });

  it('should run a reactive request', function(done) {
    requestUtilities.getData$({data: 'api/list/0/?p=0'}).forEach({
      onNext: response => {
        expect(typeof response).toBe('object');
        expect(JSON.stringify(response)).toMatch(/kanai-kun/);
      },
      onError: error => console.error(error),
      onCompleted: () => done()
    });
  });

  it('should get the manga list', function(done) {
    requestUtilities.getListByPage$(0).forEach({
      onNext: response => {
        expect(typeof response).toBe('object');
        expect(JSON.stringify(response)).toMatch(/kanai-kun/);
      },
      onError: error => console.error(error),
      onCompleted: () => done()
    });
  });

  it('should get a manga', function(done) {
    requestUtilities.getManga$('4e70e9f6c092255ef7004336').forEach({
      onNext: response => {
        expect(typeof response).toBe('object');
        expect(JSON.stringify(response)).toMatch(/airindream/);
      },
      onError: error => console.error(error),
      onCompleted: () => done()
    });
  });

  it('should get a chapter', function(done) {
    requestUtilities.getChapter$('4e711cb0c09225616d037cc2').forEach({
      onNext: response => {
        expect(typeof response).toBe('object');
        expect(JSON.stringify(response)).toMatch(/images/);
      },
      onError: error => console.error(error),
      onCompleted: () => done()
    });
  });
});
