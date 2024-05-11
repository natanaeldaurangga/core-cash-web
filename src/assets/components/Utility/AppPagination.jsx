import { Box, Pagination, TablePagination } from "@mui/material";
import React from "react";

const AppPagination = ({ totalPage, pageSize, setPageSize, page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  // TODO: coba ganti jadi table pagination component
  return (
    <Box>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={setPageSize}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default AppPagination;
