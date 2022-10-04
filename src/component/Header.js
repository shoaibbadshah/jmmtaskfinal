import { Grid, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const Header = ({ onRemove, totalItems }) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={8}>
        <Typography variant="subtitle1">Items ({totalItems})</Typography>
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
            onClick={onRemove}
            color="inherit"
          />
          Remove all items
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
