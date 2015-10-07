import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import MangaList from '../../app/components/mangaList.js';

describe('List Component', function() {
  it('renders', function() {
    var element = TestUtils.renderIntoDocument(<MangaList />);
    expect(element).toBeTruthy();
  });
});
