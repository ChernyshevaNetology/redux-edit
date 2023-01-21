import { TService } from "../reducers/formReducer";

export enum EFormActions {
  SAVE_ITEM = "SAVE_ITEM",
  DELETE_SERVICE = "DELETE_SERVICE",
  SET_EDIT_MODE = "SET_EDIT_MODE",
  SET_EDIT_ITEM = "SET_EDIT_ITEM",
}

export const handleSaveItem = (item: TService | null) => ({
  type: EFormActions.SAVE_ITEM,
  payload: { item },
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
