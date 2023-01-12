import {Check} from '@mui/icons-material'
import {Alert, AlertTitle, Button, Stack, Typography} from '@mui/material'

export function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" aria-label="Alert field">
        Alert
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is an warning alert</Alert>
        <Alert severity="success">This is an success alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an warning alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is an success alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert
        </Alert>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Alert variant="filled" severity="error">
          This is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          This is an warning alert
        </Alert>
        <Alert variant="filled" severity="success">
          This is an success alert
        </Alert>
        <Alert variant="filled" severity="info">
          This is an info alert
        </Alert>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert('Close alert')}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>warning</AlertTitle>
          This is an warning alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<Check />}
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
        >
          <AlertTitle>success</AlertTitle>
          This is an success alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>info</AlertTitle>
          This is an info alert
        </Alert>
      </Stack>
    </Stack>
  )
}

MuiAlert.propTypes = {}
