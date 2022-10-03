import { Autocomplete, TextField } from "@mui/material";
import { memo } from "react";
import { items } from "../utils/item";

const RenderCustomCell = ({ params, handleItemChange, defaultItemValue }) => {
  const isPlaceholderItem = params.row.isPlaceholderItem;
  return isPlaceholderItem ? (
    <Autocomplete
      size="small"
      isOptionEqualToValue={() => true}
      fullWidth
      inputValue={defaultItemValue}
      onChange={handleItemChange}
      id="controllable-states-demo"
      clearIcon={null}
      forcePopupIcon={false}
      disableClearable={false}
      options={items.map(({ itemName }) => itemName)}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Type and select item"
        />
      )}
    />
  ) : (
    <TextField
      color="info"
      variant="standard"
      readOnly
      value={params.row.itemName}
    />
  );
};
export default memo(RenderCustomCell);
