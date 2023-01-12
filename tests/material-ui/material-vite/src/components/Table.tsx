import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

export function MuiTable() {
  return (
    <div>
      <Typography variant="h5" aria-label="Table field">
        Table
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        if you need a complex table use react-table. IF you need a simple table
        use this.
      </Typography>
      <Stack direction="row" spacing={2}>
        <TableContainer component={Paper} sx={{maxHeight: '200px'}}>
          <Table aria-label="Simple Table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell align="center">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map(row => (
                <TableRow
                  key={row.id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </div>
  )
}

MuiTable.propTypes = {}

const tableData = [
  {
    id: 1,
    first_name: 'Thane',
    last_name: 'Breddy',
    email: 'tbreddy0@livejournal.com',
    gender: 'Male',
    ip_address: '86.42.109.48',
  },
  {
    id: 2,
    first_name: 'Carie',
    last_name: 'Crean',
    email: 'ccrean1@europa.eu',
    gender: 'Female',
    ip_address: '166.184.125.133',
  },
  {
    id: 3,
    first_name: 'Rayna',
    last_name: 'Hulles',
    email: 'rhulles2@mapy.cz',
    gender: 'Female',
    ip_address: '66.125.73.187',
  },
  {
    id: 4,
    first_name: 'Kurtis',
    last_name: 'Wavell',
    email: 'kwavell3@latimes.com',
    gender: 'Male',
    ip_address: '253.5.172.36',
  },
]
