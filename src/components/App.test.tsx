import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App/>', () => {
  it('App should match snapshot', () => {
    const appComponent = shallow(<App testMessage="test message"/>);
    expect(appComponent).toMatchSnapshot();
  })

});
