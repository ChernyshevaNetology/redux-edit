import { combineReducers } from "redux";

import { appReducer } from "./appReducer";
import { searchReducer } from "./searchReducer";
import { editReducer } from "./editReducer";

const rootReducer = combineReducers({
  app: appReducer,
  search: searchReducer,
  edit: editReducer,
});

export { rootReducer };
