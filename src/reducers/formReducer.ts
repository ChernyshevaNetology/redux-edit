import { EFormActions } from "../actions/formActions";

export type TService = {
  id: string;
  title: string;
  price: number;
};

export interface IRootState {
  app: IStateProps;
}

export interface IStateProps {
  services: TService[];
  isInEditMode: boolean;
  itemToEdit: TService | null;
}

type TAddItemAction = {
  type: EFormActions.ADD_SERVICE;
  payload: { serviceItem: TService };
};

type TDeleteItemAction = {
  type: EFormActions.DELETE_SERVICE;
  payload: { id: string };
};

type TSetEditMode = {
  type: EFormActions.SET_EDIT_MODE;
  payload: boolean;
};

type TSetEditItem = {
  type: EFormActions.SET_EDIT_ITEM;
  payload: { item: TService };
};

type TSaveEditItem = {
  type: EFormActions.SAVE_EDIT_ITEM;
  payload: { item: TService };
};

type TActionType =
  | TAddItemAction
  | TDeleteItemAction
  | TSetEditMode
  | TSetEditItem
  | TSaveEditItem;

export const services = [
  {
    id: "1",
    title: "замена стекла",
    price: 500,
  },
  {
    id: "2",
    title: "замена дисплея",
    price: 1000,
  },
  {
    id: "3",
    title: "консультация",
    price: 2500,
  },
  {
    id: "4",
    title: "починка микрофона",
    price: 1350,
  },
  {
    id: "5",
    title: "Установка windows",
    price: 1350,
  },
];

const initialState: IStateProps = {
  services,
  isInEditMode: false,
  itemToEdit: null,
};

const formReducer = (
  state: IStateProps = initialState,
  { type, payload }: TActionType
): IStateProps => {
  switch (type) {
    case EFormActions.ADD_SERVICE:
      return {
        ...state,
        services: [
          ...state.services,
          {
            ...payload.serviceItem,
          },
        ],
      };
    case EFormActions.DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter((item) => item.id !== payload.id),
      };
    case EFormActions.SET_EDIT_MODE:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
        itemToEdit: state.isInEditMode ? state.itemToEdit : null,
      };
    case EFormActions.SET_EDIT_ITEM:
      return {
        ...state,
        itemToEdit: payload.item,
      };
    case EFormActions.SAVE_EDIT_ITEM:
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

export { formReducer };
