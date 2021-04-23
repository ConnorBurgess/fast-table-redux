import React from "react";
import { shallow, mount, configure } from "enzyme";
import App from "./App";
import Header from "./Header";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

it('renders app without crashing', () => {
  shallow(<App />);
});

it("renders header", () => {
  const wrapper = shallow(<Header />);
  const welcome = <h1>FastTable</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});