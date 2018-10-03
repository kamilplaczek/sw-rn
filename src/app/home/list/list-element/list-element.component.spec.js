import * as React from 'react';
import renderer from 'react-test-renderer';
import { ListElement } from './list-element.component';

describe('list element component', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ListElement
          film={{
            name: 'foo',
            director: 'bar',
            releaseDate: '2018-09-20',
          }}
          onPress={() => {}}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
