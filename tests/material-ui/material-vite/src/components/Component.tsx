import {Stack, Typography} from '@mui/material'

export function MuiPaper() {
  return (
    <div>
      <Typography variant="h5" aria-label="Paper field">
        Paper
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}></Stack>
    </div>
  )
}

MuiPaper.propTypes = {}
