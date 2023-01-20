import { combineReducers } from "redux";

import { formReducer } from "./formReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  app: formReducer,
  search: searchReducer,
});

export { rootReducer };
