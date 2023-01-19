import {
  ADD_SERVICE,
  DELETE_SERVICE,
  SET_EDIT_MODE,
  SET_EDIT_ITEM,
  SAVE_EDIT_ITEM,
  SET_SEARCH_QUERY,
} from "../actions";

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
  searchQuery: string;
  itemToEdit: TService | null;
}

type TActionType = {
  type: string;
  payload: any;
};

const initialState: IStateProps = {
  services: [
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
  ],
  isInEditMode: false,
  searchQuery: "",
  itemToEdit: null,
};

const appReducer = (
  state: IStateProps = initialState,
  { type, payload }: TActionType
): IStateProps => {
  switch (type) {
    case ADD_SERVICE:
      return {
        ...state,
        services: [
          ...state.services,
          {
            ...payload.serviceItem,
          },
        ],
      };
    case DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter((item) => item.id !== payload.id),
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
        itemToEdit: state.isInEditMode ? state.itemToEdit : null,
      };
    case SET_EDIT_ITEM:
      return {
        ...state,
        itemToEdit: payload.item,
      };
    case SAVE_EDIT_ITEM:
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
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    default:
      return state;
  }
};

export { appReducer };
