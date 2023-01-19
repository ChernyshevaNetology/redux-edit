import { TService } from "../reducers/formReducer";

export enum EEditActions {
  SET_EDIT_MODE = "SET_EDIT_MODE",
  SET_EDIT_ITEM = "SET_EDIT_ITEM",
  SAVE_EDIT_ITEM = "SAVE_EDIT_ITEM",
}
export const handleEditMode = (editMode: boolean) => ({
  type: EEditActions.SET_EDIT_MODE,
  payload: editMode,
});

export const handleEditItem = (item: TService | null) => ({
  type: EEditActions.SET_EDIT_ITEM,
  payload: { item },
});

export const handleSaveEditItem = (item: TService) => ({
  type: EEditActions.SAVE_EDIT_ITEM,
  payload: { item },
});
