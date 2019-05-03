import { shallow } from 'enzyme';
import React from 'react';

import Header from './header';

describe('<Header />', () => {
  it('Header should match snapshot', () => {
    const appComponent = shallow(<Header />);
    expect(appComponent).toMatchSnapshot();
  })

});
