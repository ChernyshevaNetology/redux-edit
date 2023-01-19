import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { handleDeleteService } from "../actions/formActions";
import { handleEditItem, handleEditMode } from "../actions/editActions";
import { useDispatch, useSelector } from "react-redux";
import { TService } from "../reducers/appReducer";
import { IEditRootState } from "../reducers/editReducer";

function ServiceItem({ title, price, id }: TService) {
  const dispatch = useDispatch();

  const onItemRemove = () => dispatch(handleDeleteService(id));

  const isEditMode = useSelector(
    ({ edit: { isInEditMode } }: IEditRootState) => isInEditMode
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
        <EditIcon onClick={onSetEdit} className={"icon"} />
      </TableCell>
      <TableCell>
        <ClearIcon onClick={onItemRemove} className={"icon"} />
      </TableCell>
    </TableRow>
  );
}

export { ServiceItem };
