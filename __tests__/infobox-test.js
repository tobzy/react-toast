import React from 'react';
import { shallow, mount, render } from 'enzyme';

import InfoBox from '../index.js';

describe('An InfoBox component', function () {

  it('should render properly', function () {
    const wrapper = shallow(<InfoBox />)
    expect(wrapper.find('.mx-infobox-wrapper')).toHaveLength(1);
    expect(wrapper.find('.mx-infobox-content')).toHaveLength(1);
  });

  it('should be hidden properly', function () {
    const wrapper = shallow(<InfoBox show={false} />)
    expect(wrapper.find('.mx-infobox-content.show').length).toBe(0);
  });

  it('should be visible when required', function () {
    const wrapper = shallow(<InfoBox show={true} />)
    expect(wrapper.find('.mx-infobox-content.show').length).toBe(1);
  });

  it('should become visible with correct message and type when props change', function () {
    const wrapper = shallow(<InfoBox show={false} />)
    expect(wrapper.find('.mx-infobox-content.show').length).toBe(0);

    wrapper.setProps({
      show: true,
      message: 'Hello',
      boxType: 'error'
    });
    expect(wrapper.find('.mx-infobox-content.show.error').length).toBe(1);
  });

});