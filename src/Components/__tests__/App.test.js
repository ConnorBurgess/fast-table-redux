import React from "react";
import { shallow, mount, configure } from "enzyme";
import App from "../App";
import Header from "../Header";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe("App component", () => {

it('renders App without crashing', () => {
  shallow(<App />);
});

});