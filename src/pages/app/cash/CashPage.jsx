import React, { useState } from "react";
import Dashboard from "../Dashboard";
import { Box, Button, Card, TablePagination } from "@mui/material";
import CashRecordDisplay from "../../../assets/components/app/CashRecordDisplay";
import AddIcon from "@mui/icons-material/Add";
import { useAppContext } from "../../../context/services/AppProvider";
import { useEffect } from "react";
import { useGlobalContext } from "../../../context/services/GlobalProvider";
import AppPagination from "../../../assets/components/Utility/AppPagination";

const SkeletonCashPage = () => {
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
};

const CashPage = () => {
  const { AppServices } = useAppContext();
  const { ToggleDialog } = useGlobalContext();

  // START: PAGINATION ATTRIBUTE
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("ASC");
  const [sortBy, setSortBy] = useState("");
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [paginationParam, setPaginationParam] = useState({
    PageSize: 5,
    CurrentPage: 1,
    Direction: "ASC",
    SortBy: "",
    Keyword: "",
    StartDate: "",
    EndDate: "",
  });

  const [paginationResponse, setPaginationResponse] = useState({
    currentPage: 0,
    pageSize: 0,
    totalPage: 1,
    direction: "DESC",
    sortBy: "RecordedAt",
    items: [
      {
        recordId: "",
        transactionDate: "",
        entry: 0,
        balance: 0,
      },
    ],
  });

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  // END: PAGINATION ATTRIBUTE

  const clearFields = () => {
    setPaginationParam({ ...paginationResponse, records: [] });
  };
  // FIXME: ada error pas next page, lanjuting bagian pagination
  useEffect(() => {
    // TODO: Lanjut bikin pagination buat cash
    clearFields();
    setPaginationParam({
      PageSize: pageSize,
      CurrentPage: currentPage,
      Direction: direction,
      SortBy: sortBy,
      Keyword: keyword,
      StartDate: startDate,
      EndDate: endDate,
    });
    AppServices.getCashPaged(paginationParam)
      .then((res) => {
        // console.log(res.data);
        setPaginationResponse(res.data);
      })
      .catch((err) => {
        let status = err.response.status;
        if (status === 401 || status === 403)
          ToggleDialog.unauthorized.setUnauthorizedDialog(true);
        else ToggleDialog.error.setError(true);
      });
  }, [
    AppServices,
    ToggleDialog,
    pageSize,
    currentPage,
    direction,
    sortBy,
    keyword,
    startDate,
    endDate,
  ]);

  return (
    <>
      <Dashboard>
        <Card
          variant="outlined"
          sx={{
            margin: { xs: "0.25rem", sm: "0.25rem", md: "0.5rem" },
            borderRadius: "0.5rem",
            paddingY: "0.5rem",
            paddingX: "1rem",
            height: "fit-content",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
              // border: "1px solid black",
              minHeight: "75vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                maxWidth: "800px",
                marginX: "auto",
                justifyContent: "end",
                marginTop: "1.5rem",
                paddingTop: "0.125rem",
              }}
            >
              <Button variant="contained" startIcon={<AddIcon />}>
                Add
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                width: "100%",
                maxWidth: "800px",
                marginX: "auto",
                marginTop: "1.5rem",
              }}
            >
              {paginationResponse.items.map((e, i) => (
                <CashRecordDisplay
                  key={i}
                  recordId={e.recordId}
                  transactionDate={e.transactionDate}
                  entry={e.entry}
                  balance={e.balance}
                />
              ))}
            </Box>
            <TablePagination
              component="div"
              count={100}
              page={currentPage}
              onPageChange={setPageSize}
              rowsPerPage={pageSize}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{
                marginTop: "1.5rem",
              }}
            />
          </Box>
        </Card>
      </Dashboard>
    </>
  );
};

export default CashPage;
