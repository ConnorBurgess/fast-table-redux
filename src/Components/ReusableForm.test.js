import React from "react";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import ReusableForm from "./ReusableForm";
configure({adapter: new Adapter()});
describe("ReusableForm component", () => {

it('renders ReusableForm without crashing', () => {
  shallow(<ReusableForm />);
});
})