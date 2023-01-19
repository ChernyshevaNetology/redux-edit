import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { ServicesTable } from "./components/Services";
import { handleAddService } from "./actions/formActions";
import { handleSearchQuery } from "./actions/searchActions";
import {
  handleEditItem,
  handleEditMode,
  handleSaveEditItem,
} from "./actions/editActions";
import { v4 as uuidv4 } from "uuid";
import { IEditRootState } from "./reducers/editReducer";

const App = () => {
  type TFieldValuesType = {
    title: string;
    price: string | number;
  };
  const dispatch = useDispatch();

  const isEditMode = useSelector(
    ({ edit: { isInEditMode } }: IEditRootState) => isInEditMode
  );
  const editItem = useSelector(
    ({ edit: { itemToEdit } }: IEditRootState) => itemToEdit
  );
  const [fieldValues, setFieldValues] = useState<TFieldValuesType>({
    title: "",
    price: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const onCancelEdit = () => {
    dispatch(handleEditMode(false));
    dispatch(handleEditItem(null));
    setFieldValues({ title: "", price: "" });
  };

  const onFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(value);
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
    if (!fieldValues.title && !fieldValues.price) {
      return;
    }

    if (isEditMode && editItem) {
      dispatch(
        handleSaveEditItem({
          id: editItem.id,
          title: fieldValues.title,
          price: +fieldValues.price,
        })
      );
    } else {
      dispatch(
        handleAddService({
          id: uuidv4(),
          title: fieldValues.title,
          price: +fieldValues.price,
        })
      );
    }
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
          label="Фильтр"
          variant="outlined"
          name={"searchQuery"}
          value={searchQuery}
          onChange={onFilter}
        />
        <TextField
          id="outlined-basic"
          label="Введите услугу"
          variant="outlined"
          name={"title"}
          value={fieldValues.title}
          onChange={handleFieldValues}
        />
        <TextField
          id="outlined-basic"
          label="Введите цену"
          variant="outlined"
          name={"price"}
          type={"number"}
          value={fieldValues.price}
          onChange={handleFieldValues}
        />
        <>
          <Button onClick={onAdd} className={"btn"} variant="contained">
            {isEditMode ? "сохранить" : "добавить"}
          </Button>
          {isEditMode && (
            <Button
              onClick={onCancelEdit}
              className={"btn"}
              variant="contained"
            >
              отменить
            </Button>
          )}
        </>
      </div>
      <div className="services__table">
        <ServicesTable />
      </div>
    </div>
  );
};

export { App };
