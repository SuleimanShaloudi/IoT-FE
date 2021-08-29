import Paper from "@material-ui/core/Paper";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useDevicesTableStyle } from "./DevicesTable.style";
import { DeviceTableProps, Column } from "./DevicesTable.types";
import {
  DEVICES_TABLE_PERCENTAGE_COLUMN,
  DEVICES_TABLE_TOTAL_COLUMN,
  DEVICES_TABLE_TYPE_COLUMN,
} from "../../constants/devices-list.constants";
import { DeviceTypesResponse } from "../../containers/Dashboard/Dashboard.types";

const columns: Column[] = [
  {
    id: DEVICES_TABLE_TYPE_COLUMN,
    label: DEVICES_TABLE_TYPE_COLUMN,
    minWidth: 100,
  },
  {
    id: DEVICES_TABLE_TOTAL_COLUMN,
    label: DEVICES_TABLE_TOTAL_COLUMN,
    minWidth: 100,
  },
  {
    id: DEVICES_TABLE_PERCENTAGE_COLUMN,
    label: DEVICES_TABLE_PERCENTAGE_COLUMN,
    minWidth: 100,
  },
];

const DevicesTable = (props: DeviceTableProps) => {
  const { deviceTypesList } = props;
  const classes = useDevicesTableStyle();
  const {
    flex,
    header,
    actions,
    avatarThumbnail,
    caption,
    input,
    root,
    select,
    subHeader,
    tableBodyCell,
    tableHeadCell,
    tableRow,
    toolbar,
  } = classes;

  return (
    <Paper className={root}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={tableHeadCell}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {deviceTypesList &&
              deviceTypesList.length > 0 &&
              deviceTypesList.map((row: DeviceTypesResponse) => {
                return (
                  <TableRow
                    key={row.deviceType}
                    className={tableRow}
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell className={tableBodyCell}>
                      <Typography>{row.deviceType}</Typography>
                    </TableCell>
                    <TableCell className={tableBodyCell}>
                      <Typography>{row.total}</Typography>
                    </TableCell>
                    <TableCell className={tableBodyCell}>
                      <Typography>{row.percentage.toFixed(2) + "%"}</Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DevicesTable;
