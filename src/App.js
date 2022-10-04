import { useState } from "react";
import { Box } from "@mui/material";
import DataTable from "./component/DataTabe";
import Summary from "./component/Summary";
import Header from "./component/Header";

export default function App() {
  const [rows, setRows] = useState([]);
  const handleRemoveClick = () => {
    setRows([]);
  };
  return (
    <Box padding={22}>
      <Header onRemove={handleRemoveClick} totalItems={rows.length} />
      <DataTable rows={rows} setRows={setRows} />
      <Summary rows={rows} />
    </Box>
  );
}
