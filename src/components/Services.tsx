import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { ServiceItem } from "./ServiceItem";
import { useSelector } from "react-redux";
import { IRootState, TService } from "../reducers/appReducer";
import { ISearchState } from "../reducers/searchReducer";

const ServicesTable = () => {
  const serviceItems = useSelector(
    ({ app: { services } }: IRootState) => services
  );

  const searchQuery = useSelector(
    ({ search: { query } }: ISearchState) => query
  );
  const servicesItemsToRender = searchQuery
    ? serviceItems.filter((item: TService) =>
        item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    : serviceItems;

  return (
    <TableContainer
      sx={{ maxWidth: 650, align: "center" }}
      className={"table"}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableBody>
          {servicesItemsToRender.map(({ id, title, price }: TService) => (
            <ServiceItem key={id} title={title} price={price} id={id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { ServicesTable };
