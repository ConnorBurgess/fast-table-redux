import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import NewSectionForm from "../Components/NewSectionForm";
describe("NewSectionForm component", () => {
configure({adapter: new Adapter()});

it('renders NewSectionForm without crashing', () => {
  shallow(<NewSectionForm />);
});
});