import React from "react";
import { shallow, mount, configure } from "enzyme";
import App from "./Components/App";
import Header from "./Components/Header";
import toJson from "enzyme-to-json";

import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

it('renders app without crashing', () => {
  shallow(<App />);
});
