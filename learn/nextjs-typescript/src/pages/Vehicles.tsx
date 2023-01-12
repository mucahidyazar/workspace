import fetch from 'isomorphic-unfetch';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import { Vehicle } from '../../api/interfaces';
import { myGet } from '../../api/myGet';
import { NextPageContext } from 'next';

export interface VehiclesProps {
  list: Vehicle[]
}

export default function Vehicles ({ list }: VehiclesProps) {
  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="right">Brand</TableCell>
          <TableCell align="right">Model</TableCell>
          <TableCell align="right">OwnerId</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.brand}</TableCell>
            <TableCell align="right">{row.model}</TableCell>
            <TableCell align="right">{row.ownerId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

Vehicles.getInitialProps = async (ctx: NextPageContext) => {
  const resp = await myGet('http://localhost:3000/api/vehicles', ctx);
  return { list: resp };
}