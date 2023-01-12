import {
  Alert,
  AlertProps,
  Button,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material'
import React, {forwardRef, useState} from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />
  },
)

export function MuiSnackbar() {
  const [open, setOpen] = useState(false)

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <div>
      <Typography variant="h5" aria-label="Snackbar field">
        Snackbar / Toast
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        <Snackbar
          message="Form submitted successfully!"
          autoHideDuration={4000}
          open={open}
          onClose={handleClose}
          // sag uste gostermek icin
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        />
        <Snackbar autoHideDuration={6000} open={open} onClose={handleClose}>
          <SnackbarAlert onClose={handleClose} severity="success">
            Form submitted succesfully
          </SnackbarAlert>
        </Snackbar>
      </Stack>
    </div>
  )
}

MuiSnackbar.propTypes = {}
