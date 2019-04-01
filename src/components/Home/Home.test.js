import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import Home from './Home';

configure({adapter: new Adapter()});

describe('Home Component', () => {
  it('renders Home', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has welcome text Bay Area Discord Drivers', () => {
    const wrapper = mount(<Home />);
    const welcomeText = wrapper.find('.welcome-text').last().text();

    expect(welcomeText).toContain('Bay Area Discord Drivers')
  })

  it('has welcome subtext Welcome to the bay area car enthusiast hub', () => {
    const wrapper = mount(<Home />);
    const welcomeSubText = wrapper.find('.welcome-subtext').last().text();

    expect(welcomeSubText).toContain('Welcome to the bay area car enthusiast hub!')
  })

});

