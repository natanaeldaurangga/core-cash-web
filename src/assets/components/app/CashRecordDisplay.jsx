import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { CurrencyFormat } from "../../../utilities/currencyFormat";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { StatusCurrency } from "../../../utilities/currencyColor";
import { DateTimeUtil } from "../../../utilities/dateTime";

// TODO: Bikin skeleton buat CashRecordDisplay
const CashRecordDisplay = ({
  recordId,
  transactionDate,
  entry = 0,
  balance,
}) => {
  const statusColor = [
    StatusCurrency.error.heavy,
    StatusCurrency.success.heavy,
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.2)",
          height: "40px",
          borderRadius: "0.125rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: "0.75rem",
          paddingY: "1.825rem",
        }}
      >
        {/*TODO: Lanjut bikin card buat record cash  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <Typography color={"gray"} fontSize={"0.625rem"}>
            {DateTimeUtil.normalizeISO(transactionDate)}
          </Typography>
          <Typography color={statusColor[entry]}>
            {entry ? <AddIcon /> : <RemoveIcon />}
            {CurrencyFormat.idr(balance)}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="text"
            component="a"
            href={`/cash/detail/${recordId}`}
          >
            Detail
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CashRecordDisplay;
