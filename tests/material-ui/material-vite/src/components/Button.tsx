import React from 'react'
import {Button, Stack, Typography, IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export function MuiButton() {
  return (
    <div>
      <hr />
      <Typography variant="h1">Basics of Buttons</Typography>
      <Stack spacing={2} direction="row">
        {/* It is an <a></a> element because of href */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <hr />
      <Typography variant="h1">Colors</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <hr />
      <Typography variant="h1">sizes</Typography>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <hr />
      <Typography variant="h1">Icons</Typography>
      <Stack display="block" spacing={2} direction="row">
        {/* disableRiplle closes click ripple animation effect */}
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send with StartIcon
        </Button>
        {/* disableElevetion closes the shadows */}
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send with endIcon
        </Button>
      </Stack>

      <hr />
      <Typography variant="h1">IconButton</Typography>
      <Stack display="block" spacing={2} direction="row">
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </div>
  )
}

MuiButton.propTypes = {}
