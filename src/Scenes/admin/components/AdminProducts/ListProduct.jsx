import {
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useGetProductsQuery } from "../../../../features/productsApiSlice";
import { useEffect, useState } from "react";
import FlexBetween from "../../../../Components/FlexBetween";

const ListProduct = () => {
  const [page, setPage] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(0);

  const [pageSize, setPageSize] = useState(10);
  const [pageContent, setPageContent] = useState([]);

  const { data, isLoading } = useGetProductsQuery({
    page,
    pageSize,
  });

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      setPageContent(data.allProducts);
      console.log(data.allProducts.length);
      setTotalPageNum(data.totalPages);
    }
  }, [data, isLoading]);

  console.log(pageContent?.length);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productName", headerName: "Product Name", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "stock", headerName: "Stock", width: 130 },
    { field: "createdTime", headerName: "Created", width: 130 },
    { field: "updatedTime", headerName: "Last Update", width: 130 },
  ];

  const nextPage = (event, value) => {
    setPage(value);
  };

  const pageSizeHandler = (e) => {
    setPageSize(e.target.value);
  };

  return (
    <FlexBetween sx={{ flexDirection: "column", width: "80%" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((c) => (
                <TableCell align="left" key={c.headerName}>
                  {c.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pageContent.map((p, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  height="40px"
                  width="auto"
                >
                  {p.id}
                </TableCell>
                <TableCell align="left" height="40px">
                  {p.name}
                </TableCell>
                <TableCell align="left" height="40px">
                  {p.price}
                </TableCell>
                <TableCell align="left" height="40px">
                  {p.stock}
                </TableCell>
                <TableCell align="left" height="40px">
                  {p.createdTime}
                </TableCell>
                <TableCell align="left" height="40px">
                  {p.updatedTime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FlexBetween sx={{ width: "100%", justifyContent: "space-between" }}>
        <FlexBetween>
          <InputLabel>Page Size:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pageSize}
            label="Age"
            onChange={pageSizeHandler}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FlexBetween>
        <Stack spacing={2}>
          <Pagination count={totalPageNum} size="small" onChange={nextPage} />
        </Stack>
      </FlexBetween>
    </FlexBetween>
  );
};

export default ListProduct;
