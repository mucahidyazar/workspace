import React from 'react'
import {Button, Stack, Typography, IconButton, ButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export function MuiButtonGroup() {
  return (
    <div>
      <Typography variant="h5">Button Group</Typography>
      <Stack direction="row">
        <ButtonGroup>
          <Button variant="contained">Left</Button>
          <Button variant="contained">Center</Button>
          <Button variant="contained">Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment buttongroup"
        >
          <Button onClick={() => {}}>Center</Button>
          <Button onClick={() => {}}>Left</Button>
          <Button onClick={() => {}}>Right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  )
}

MuiButtonGroup.propTypes = {}
