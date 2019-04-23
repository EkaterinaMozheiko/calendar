import { shallow } from 'enzyme';
import React from 'react';

import Converter from './converter';

describe('<Converter/>', () => {
  it('Converter should match snapshot', () => {
    const appComponent = shallow(<Converter />);
    expect(appComponent).toMatchSnapshot();
  })

});
