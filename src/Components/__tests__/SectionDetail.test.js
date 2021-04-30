import React from "react";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import SectionDetail from "../SectionDetail";
configure({adapter: new Adapter()});
describe("SectionDetail component", () => {

it('renders SectionDetail without crashing', () => {
  shallow(<SectionDetail />);
});
})