import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { ServicesTable } from "./components/Services";
import { handleSearchQuery } from "./actions/searchActions";
import {
  handleEditItem,
  handleEditMode,
  handleSaveItem,
} from "./actions/formActions";
import { v4 as uuidv4 } from "uuid";
import { IRootState } from "./reducers/formReducer";
import { ISearchState } from "./reducers/searchReducer";

const App = () => {
  type TFieldValuesType = {
    title: string;
    price: string | number;
  };
  const dispatch = useDispatch();

  const isEditMode = useSelector(
    ({ app: { isInEditMode } }: IRootState) => isInEditMode
  );
  const editItem = useSelector(
    ({ app: { itemToEdit } }: IRootState) => itemToEdit
  );

  const searchQuery = useSelector(
    ({ search: { query } }: ISearchState) => query
  );
  const [fieldValues, setFieldValues] = useState<TFieldValuesType>({
    title: "",
    price: "",
  });

  const onCancelEdit = () => {
    dispatch(handleEditMode(false));
    dispatch(handleEditItem(null));
    setFieldValues({ title: "", price: "" });
  };

  const onFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleSearchQuery(value));
  };

  useEffect(() => {
    if (editItem !== null) {
      setFieldValues({
        title: editItem.title,
        price: editItem.price,
      });
    }
  }, [isEditMode]);

  const onAdd = () => {
    if (!fieldValues.title || !fieldValues.price) {
      return;
    }
    dispatch(
      handleSaveItem({
        id: editItem?.id || uuidv4(),
        title: fieldValues.title,
        price: +fieldValues.price,
      })
    );
    setFieldValues({ title: "", price: "" });
  };

  const handleFieldValues = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  return (
    <div className="root">
      <div className="form">
        <TextField
          id="outlined-basic"
          label="????????????"
          variant="outlined"
          name={"searchQuery"}
          value={searchQuery}
          onChange={onFilter}
        />
        <TextField
          id="outlined-basic"
          label="?????????????? ????????????"
          variant="outlined"
          name={"title"}
          value={fieldValues.title}
          onChange={handleFieldValues}
        />
        <TextField
          id="outlined-basic"
          label="?????????????? ????????"
          variant="outlined"
          name={"price"}
          type={"number"}
          value={fieldValues.price}
          onChange={handleFieldValues}
        />
        <>
          <Button onClick={onAdd} className={"btn"} variant="contained">
            {isEditMode ? "??????????????????" : "????????????????"}
          </Button>
          {isEditMode && (
            <Button
              onClick={onCancelEdit}
              className={"btn"}
              variant="contained"
            >
              ????????????????
            </Button>
          )}
        </>
      </div>
      <ServicesTable />
    </div>
  );
};

export { App };
