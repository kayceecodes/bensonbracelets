import React, { FormEventHandler } from "react";
import { shallow, mount, EnzymePropSelector, EnzymeAdapter } from "enzyme";

import {
  findByTestAttr,
  storeFactory,
  IWrapper
} from "../../../../test/testUtils";

import ConnectedRegister, { Collections } from "./Collections";
