import { TService, services } from "./appReducer";
import { EEditActions } from "../actions/editActions";

export interface IEditRootState {
  edit: IEditState;
}

export interface IEditState {
  services: TService[];
  isInEditMode: boolean;
  itemToEdit: TService | null;
}

type TSetEditMode = {
  type: EEditActions.SET_EDIT_MODE;
  payload: boolean;
};

type TSetEditItem = {
  type: EEditActions.SET_EDIT_ITEM;
  payload: { item: TService };
};

type TSaveEditItem = {
  type: EEditActions.SAVE_EDIT_ITEM;
  payload: { item: TService };
};

type TActionType = TSetEditMode | TSetEditItem | TSaveEditItem;

const initialState: IEditState = {
  services,
  isInEditMode: false,
  itemToEdit: null,
};

const editReducer = (
  state: IEditState = initialState,
  { type, payload }: TActionType
): IEditState => {
  switch (type) {
    case EEditActions.SET_EDIT_MODE:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
        itemToEdit: state.isInEditMode ? state.itemToEdit : null,
      };
    case EEditActions.SET_EDIT_ITEM:
      return {
        ...state,
        itemToEdit: payload.item,
      };
    case EEditActions.SAVE_EDIT_ITEM:
      return {
        ...state,
        services: state.services.map((item) => {
          if (item.id === payload.item.id) {
            return payload.item;
          }
          return item;
        }),
        itemToEdit: null,
        isInEditMode: false,
      };
    default:
      return state;
  }
};

export { editReducer };
