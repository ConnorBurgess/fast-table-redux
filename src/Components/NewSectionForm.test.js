import React from "react";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import NewSectionForm from "./NewSectionForm";
describe("NewSectionForm component", () => {
configure({adapter: new Adapter()});

it('renders NewSectionForm without crashing', () => {
  shallow(<NewSectionForm />);
});
});