import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { handleDeleteService } from "../actions/formActions";
import { handleEditItem, handleEditMode } from "../actions/formActions";
import { useDispatch, useSelector } from "react-redux";
import { TService } from "../reducers/formReducer";
import { IRootState } from "../reducers/formReducer";

function ServiceItem({ title, price, id }: TService) {
  const dispatch = useDispatch();

  const onItemRemove = () => dispatch(handleDeleteService(id));

  const isEditMode = useSelector(
    ({ app: { isInEditMode } }: IRootState) => isInEditMode
  );

  const onSetEdit = () => {
    if (!isEditMode) {
      dispatch(handleEditMode(isEditMode));
      dispatch(handleEditItem({ id, title, price }));
    }
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        {!isEditMode && <EditIcon onClick={onSetEdit} className={"icon"} />}
      </TableCell>
      <TableCell>
        {!isEditMode && <ClearIcon onClick={onItemRemove} className={"icon"} />}
      </TableCell>
    </TableRow>
  );
}

export { ServiceItem };
