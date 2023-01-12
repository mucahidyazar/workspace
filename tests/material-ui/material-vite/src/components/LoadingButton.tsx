import {Stack, Typography} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import {Save} from '@mui/icons-material'

export function MuiLoadingButton() {
  return (
    <div>
      <Typography variant="h5" aria-label="LoadingButton field">
        LoadingButton
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
          Submit
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<Save />}
        >
          Submit
        </LoadingButton>
      </Stack>
    </div>
  )
}

MuiLoadingButton.propTypes = {}
