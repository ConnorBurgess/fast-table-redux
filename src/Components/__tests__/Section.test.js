import React from "react";
import { shallow, mount, configure } from "enzyme";
import Section from "../Section";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe("Section component", () => {

it('renders Section without crashing', () => {
  shallow(<Section />);
});
})
