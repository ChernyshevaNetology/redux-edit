import { combineReducers } from "redux";

import { formReducer } from "./formReducer";
import { searchReducer } from "./searchReducer";
import { editReducer } from "./editReducer";

const rootReducer = combineReducers({
  app: formReducer,
  search: searchReducer,
  edit: editReducer,
});

export { rootReducer };
