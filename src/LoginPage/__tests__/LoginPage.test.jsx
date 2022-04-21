import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LoginPage from '../LoginPage';

describe('<LoginPage>', () => {
  it('has a LoginPage button', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper.containsMatchingElement(<button type="submit">LoginPage</button>)).to.be.true;
  });


//   it('has a email input field', () => {
//     const wrapper = shallow(<LoginPage/>);
//     expect(wrapper.containsMatchingElement(<input type="email" />)).to.be.true;
//   });

//   it('has a password input field', () => {
//     const wrapper = shallow(<LoginPage/>);
//     expect(wrapper.containsMatchingElement(<input type="password" />)).to.be.true;
//   });

//   it('passes LoginPage information', () => {
//     const email = 'tjgarlick@gmail.com';
//     const password = '123password';
//     const wrapper = shallow(<LoginPage handleLogin={state => {
//       expect(state.email).to.be.equal(email);
//       expect(state.password).to.be.equal(password);
//     }}/>);
//     wrapper.setState({ email: 'tjgarlick@gmail.com', password: '123password'});
//     wrapper.find('button').simulate('click');
//   });
});