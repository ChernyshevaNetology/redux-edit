import { TService } from "../reducers/formReducer";

export enum EFormActions {
  ADD_SERVICE = "ADD_SERVICE",
  DELETE_SERVICE = "DELETE_SERVICE",
}

export const handleAddService = (serviceItem: TService) => ({
  type: EFormActions.ADD_SERVICE,
  payload: { serviceItem },
});

export const handleDeleteService = (id: string) => ({
  type: EFormActions.DELETE_SERVICE,
  payload: { id },
});
