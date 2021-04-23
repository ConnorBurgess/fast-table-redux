import React from "react";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import SectionList from "./SectionList";
configure({adapter: new Adapter()});
describe("SectionList component", () => {

it('renders SectionList without crashing', () => {
  shallow(<SectionList />);
});
})