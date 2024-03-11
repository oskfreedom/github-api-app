import { combineReducers } from "@reduxjs/toolkit";
import { loadReducers, loadActions } from "./load.slice";
import { screenReducers, screenActions } from "./screen.slice";
import { scanReducers, scanActions } from "./scan.slice";

export const Slices = combineReducers({
  load: loadReducers,
  screen: screenReducers,
  scan: scanReducers,
});

export const Actions = {
  load: loadActions,
  screen: screenActions,
  scan: scanActions,
};
