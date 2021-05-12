import React from "react";
import { shallow, configure } from "enzyme";
import Header from "../Components/Header";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe("Header component", () => {

it('renders Header without crashing', () => {
  shallow(<Header />);
});

it("renders expected Header output", () => {
  const wrapper = shallow(<Header />);
  const welcome = <h1>FastTable</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
});