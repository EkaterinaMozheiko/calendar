import { shallow } from 'enzyme';
import React from 'react';

import Dropdown, { DropdownProps } from './dropdown';

describe('<Dropdown />', () => {
  let props: DropdownProps;
  const currencies = [
    { currencyName: 'UAE Dirham', id: 'AED' },
    { currencyName: 'Netherlands Antillean Gulden', currencySymbol: 'ƒ', id: 'ANG' }
  ]
  beforeEach(() => {
    props = {
      theme: null,
      classes: null,
      placeholder: 'From',
      currencies
    }
  });

  it('Dropdown should match snapshot', () => {
    const appComponent = shallow(<Dropdown {...props} />);
    expect(appComponent).toMatchSnapshot();
  })

  it('render currencies', () => {
    const wrapper = shallow(
      <Dropdown {...props} />
    );
    expect(wrapper.prop('currencies')).toEqual(currencies);
  });

});
