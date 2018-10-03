import * as React from 'react';
import renderer from 'react-test-renderer';
import { ListElement } from './list-element.component';
import { shallow } from 'enzyme';

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

  it('calls onPress handler', () => {
    const onPress = jest.fn();
    const wrapper = shallow(
      <ListElement
        film={{
          name: 'foo',
          director: 'bar',
          releaseDate: '2018-09-20',
        }}
        onPress={onPress}
      />
    );
    wrapper.find({ testID: 'listElement' }).simulate('press');
    expect(onPress).toBeCalled();
  });
});
