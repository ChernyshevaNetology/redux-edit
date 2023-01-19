import { ESearchActions } from "../actions/searchActions";

export interface ISearchState {
  search: ISearchQuery;
}

export interface ISearchQuery {
  query: string;
}

const initialState: ISearchQuery = {
  query: "",
};

type TActionType = {
  type: ESearchActions.SET_SEARCH_QUERY;
  payload: ISearchQuery;
};

const searchReducer = (
  state: ISearchQuery = initialState,
  { type, payload }: TActionType
): ISearchQuery => {
  switch (type) {
    case ESearchActions.SET_SEARCH_QUERY:
      return {
        ...state,
        query: payload.query,
      };
    default:
      return state;
  }
};

export { searchReducer };
