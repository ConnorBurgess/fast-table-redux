import React from "react";
import { shallow, configure } from "enzyme";
import Section from "../Components/Section";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe("Section component", () => {

it('renders Section without crashing', () => {
  shallow(<Section />);
});
})
