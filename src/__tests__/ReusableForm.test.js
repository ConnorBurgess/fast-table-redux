import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ReusableForm from "../Components/ReusableForm";
configure({adapter: new Adapter()});
describe("ReusableForm component", () => {

it('renders ReusableForm without crashing', () => {
  shallow(<ReusableForm />);
});
})