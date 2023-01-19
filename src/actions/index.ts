import { TService } from "../reducers/appReducer";

export const ADD_SERVICE = "ADD_SERVICE";
export const DELETE_SERVICE = "DELETE_SERVICE";
export const SET_EDIT_MODE = "SET_EDIT_MODE";
export const SET_EDIT_ITEM = "SET_EDIT_ITEM";
export const SAVE_EDIT_ITEM = "SAVE_EDIT_ITEM";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export const handleAddService = (serviceItem: TService) => ({
  type: ADD_SERVICE,
  payload: { serviceItem },
});

export const handleDeleteService = (id: string) => ({
  type: DELETE_SERVICE,
  payload: { id },
});

export const handleEditMode = (editMode: boolean) => ({
  type: SET_EDIT_MODE,
  payload: editMode,
});

export const handleEditItem = (item: TService | null) => ({
  type: SET_EDIT_ITEM,
  payload: { item },
});

export const handleSaveEditItem = (item: TService) => ({
  type: SAVE_EDIT_ITEM,
  payload: { item },
});

export const handleSearchQuery = (query: string) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
