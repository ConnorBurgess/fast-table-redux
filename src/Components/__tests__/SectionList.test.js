import React from "react";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import Section from "../Section";
configure({adapter: new Adapter()});
describe("Section component", () => {

it('renders Section without crashing', () => {
  shallow(<Section />);
});
})