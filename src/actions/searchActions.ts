export enum ESearchActions {
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
}

export const handleSearchQuery = (query: string) => ({
  type: ESearchActions.SET_SEARCH_QUERY,
  payload: { query },
});
