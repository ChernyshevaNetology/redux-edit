import { TService } from "../reducers/formReducer";

export enum EFormActions {
  ADD_SERVICE = "ADD_SERVICE",
  DELETE_SERVICE = "DELETE_SERVICE",
  SET_EDIT_MODE = "SET_EDIT_MODE",
  SET_EDIT_ITEM = "SET_EDIT_ITEM",
  SAVE_EDIT_ITEM = "SAVE_EDIT_ITEM",
}

export const handleAddService = (serviceItem: TService) => ({
  type: EFormActions.ADD_SERVICE,
  payload: { serviceItem },
});

export const handleDeleteService = (id: string) => ({
  type: EFormActions.DELETE_SERVICE,
  payload: { id },
});

export const handleEditMode = (editMode: boolean) => ({
  type: EFormActions.SET_EDIT_MODE,
  payload: editMode,
});

export const handleEditItem = (item: TService | null) => ({
  type: EFormActions.SET_EDIT_ITEM,
  payload: { item },
});

export const handleSaveEditItem = (item: TService) => ({
  type: EFormActions.SAVE_EDIT_ITEM,
  payload: { item },
});
