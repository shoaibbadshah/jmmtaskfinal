import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { getTotalExcVat, getVatAmount } from "../utils";

const COLOR = "rgb(66,127,188)";
export default function Summary({ rows = [] }) {
  const showTotal = useMemo(
    () =>
      rows.reduce(
        (acc, value) =>
          acc +
          getTotalExcVat(value.price, value.quantity, value.discountPercentage),
        0
      ),
    [rows]
  );
  const showVAT = useMemo(
    () =>
      rows.reduce(
        (acc, value) =>
          acc +
          getVatAmount(
            value.vatPercentage,
            getTotalExcVat(
              value.price,
              value.quantity,
              value.discountPercentage
            )
          ),
        0
      ),
    [rows]
  );
  const showGrandTotal = useMemo(
    () =>
      rows.reduce(
        (acc, value) =>
          acc +
          getTotalExcVat(
            value.price,
            value.quantity,
            value.discountPercentage
          ) +
          getVatAmount(
            value.vatPercentage,
            getTotalExcVat(
              value.price,
              value.quantity,
              value.discountPercentage
            )
          ),
        0
      ),
    [rows]
  );
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        float: "right",
        marginTop: "20px",
      }}
    >
      <TableContainer component={Paper}>
        <Table aria-label="spanning table">
          <TableBody>
            <TableRow>
              <TableCell variant="head">
                <Typography align="left" variant="h6" component="h6">
                  Summary
                </Typography>
              </TableCell>
              <TableCell align="right">{null}</TableCell>
              <TableCell align="right">{null}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="body">Total</TableCell>
              <TableCell align="right">{showTotal}</TableCell>
              <TableCell align="right">SAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="body">VAT</TableCell>
              <TableCell align="right">{showVAT}</TableCell>
              <TableCell align="right">SAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: COLOR }} variant="footer">
                Grand Total
              </TableCell>
              <TableCell sx={{ color: COLOR }} align="right">
                {showGrandTotal}
              </TableCell>
              <TableCell sx={{ color: COLOR }} align="right">
                SAR
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        sx={{ backgroundColor: COLOR, marginTop: "10px" }}
        fullWidth
        variant="contained"
      >
        Save & Proceed
      </Button>
    </Box>
  );
}
