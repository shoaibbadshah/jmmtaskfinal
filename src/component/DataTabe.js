import { useState, useMemo, useCallback } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import {
  getTotalExcVat,
  getVatAmount,
  items,
  placeholderItem,
} from "../utils/item";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import RenderCustomCell from "../component/RenderCustomCell";

export default function DataTable({ rows, setRows }) {
  const [defaultItemValue, setDefaultItemValue] = useState("");
  const handleItemChange = useCallback(
    (e, item) => {
      const selectedItem = items.find(({ itemName }) => itemName === item);
      if (selectedItem) {
        setRows((prevState) => [
          ...prevState,
          { id: prevState.length + 1, ...selectedItem },
        ]);
      }
      setDefaultItemValue("");
    },
    [setRows]
  );
  const handleDeleteClick = useCallback(
    (id) => {
      setRows((prevState) => prevState.filter(({ itemId }) => itemId !== id));
    },
    [setRows]
  );
  const columns = useMemo(
    () => [
      {
        field: "itemName",
        sortable: false,
        headerName: "Item",
        minWidth: 200,
        renderCell: (params) => (
          <RenderCustomCell
            params={params}
            defaultItemValue={defaultItemValue}
            handleItemChange={handleItemChange}
          />
        ),
      },
      { field: "unit", align: "center", sortable: false, headerName: "Unit" },
      {
        field: "price",
        align: "center",
        sortable: false,
        editable: true,
        type: "number",
        headerName: "Cost Price",
      },
      {
        field: "quantity",
        align: "center",
        sortable: false,
        editable: true,
        headerName: "Quantity",
        type: "number",
      },
      {
        field: "totalExcVAT",
        align: "center",
        headerName: "Total Exc VAT",
        sortable: false,
        valueGetter: (params) =>
          getTotalExcVat(
            params.row.price,
            params.row.quantity,
            params.row.discountPercentage
          ),
      },
      {
        field: "vatPercentage",
        align: "center",
        headerName: "VAT%",
        sortable: false,
        valueGetter: (params) =>
          `${params.row.vatPercentage}%  ${getVatAmount(
            params.row.vatPercentage,
            getTotalExcVat(
              params.row.price,
              params.row.quantity,
              params.row.discountPercentage
            )
          )} SAR`,
      },
      {
        field: "discountPercentage",
        align: "center",
        sortable: false,
        editable: true,
        headerName: "Discount",
        type: "number",
        valueGetter: (params) => +params.row.discountPercentage.toFixed(2),
      },
      {
        field: "totalIncVAT",
        align: "center",
        headerName: "Total Inc VAT",
        sortable: false,
        valueGetter: (params) =>
          getTotalExcVat(
            params.row.price,
            params.row.quantity,
            params.row.discountPercentage
          ) +
          getVatAmount(
            params.row.vatPercentage,
            getTotalExcVat(
              params.row.price,
              params.row.quantity,
              params.row.discountPercentage
            )
          ),
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        width: 100,
        cellClassName: "actions",
        getActions: (params) => {
          if (!params.row.isPlaceholderItem) {
            return [
              <GridActionsCellItem
                icon={
                  <DeleteIcon
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        color: "red",
                      },
                    }}
                    color="error"
                  />
                }
                label="Delete"
                onClick={() => handleDeleteClick(params.row.itemId)}
                color="inherit"
              />,
            ];
          } else {
            return [<div />];
          }
        },
      },
    ],
    [handleDeleteClick, handleItemChange, defaultItemValue]
  );

  const handleOnRowEditStop = (params) => {
    const rowMap = rows.map((item) =>
      item.itemId === params.row.itemId ? params.row : item
    );
    setRows(rowMap);
  };
  return (
    <div>
      <DataGrid
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "rgb(41,89,138)",
            color: "white",
          },
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        editMode="row"
        rows={[...rows, placeholderItem]}
        onRowEditStop={handleOnRowEditStop}
        columns={columns}
        autoHeight
        headerHeight={40}
        disableColumnMenu
        hideFooter
      />
    </div>
  );
}
