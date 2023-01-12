import {
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'

export function MuiProggress() {
  return (
    <div>
      <Typography variant="h5" aria-label="Proggress field">
        Proggress
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={60} color="success" />
        <CircularProgress variant="determinate" value={20} color="success" />
        <CircularProgress variant="determinate" value={90} color="success" />
      </Stack>
      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={60} color="success" />
      </Stack>
    </div>
  )
}

MuiProggress.propTypes = {}
