import React from "react";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import SectionControl from "./SectionControl";
configure({adapter: new Adapter()});
describe("SectionControl component", () => {

it('renders SectionControl without crashing', () => {
  shallow(<SectionControl />);
});
})