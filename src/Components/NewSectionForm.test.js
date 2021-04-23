import React from "react";
import { shallow, mount, configure } from "enzyme";
import NewSectionForm from "./NewSectionForm";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

it('renders NewSectionForm without crashing', () => {
  shallow(<NewSectionForm />);
});