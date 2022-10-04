import { Autocomplete, TextField } from "@mui/material";
import { memo, useState } from "react";
import { items } from "../utils";

const TypeAndSelectItem = ({ params, handleAddItem }) => {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const isPlaceholderItem = params.row.isPlaceholderItem;

  return isPlaceholderItem ? (
    <Autocomplete
      size="small"
      isOptionEqualToValue={() => true}
      fullWidth
      value={value}
      inputValue={inputValue}
      onChange={(e, item) => {
        handleAddItem(item);
        setValue("");
        setInputValue("");
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
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
export default memo(TypeAndSelectItem);
