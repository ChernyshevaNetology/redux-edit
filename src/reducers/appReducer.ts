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
}

type TAddItemAction = {
  type: EFormActions.ADD_SERVICE;
  payload: { serviceItem: TService };
};

type TDeleteItemAction = {
  type: EFormActions.DELETE_SERVICE;
  payload: { id: string };
};

type TActionType = TAddItemAction | TDeleteItemAction;

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
};

const appReducer = (
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
    default:
      return state;
  }
};

export { appReducer };
