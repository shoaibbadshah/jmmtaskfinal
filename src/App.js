import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import DataTable from "./component/DataTabe";
import Summary from "./component/Summary";

export default function App() {
  const [rows, setRows] = useState([]);
  const handleDeleteClick = () => {
    setRows([]);
  };
  return (
    <Box padding={22}>
      <Grid container spacing={8}>
        <Grid item xs={8}>
          <Typography variant="subtitle1">Items ({rows.length})</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="subtitle2"
            sx={{ color: "rgb(134,149,163)", fontSize: 13 }}
          >
            <GridActionsCellItem
              icon={
                <DeleteIcon
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    },
                  }}
                />
              }
              label="Delete"
              onClick={handleDeleteClick}
              color="inherit"
            />
            Remove all items
          </Typography>
        </Grid>
      </Grid>
      <DataTable rows={rows} setRows={setRows} />
      <Summary rows={rows} />
    </Box>
  );
}
