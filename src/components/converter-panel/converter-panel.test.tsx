import { shallow } from 'enzyme';
import React from 'react';

import ConverterPanel from './converter-panel';

describe('<ConverterPanel/>', () => {
  it('ConverterPanel should match snapshot', () => {
    const appComponent = shallow(<ConverterPanel />);
    expect(appComponent).toMatchSnapshot();
  })

});
