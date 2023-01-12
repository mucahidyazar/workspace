import React, {useState} from 'react'
import {Stack, Typography, Divider, Box} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'

// shortly Box = div
// shortly Stack = for one dimentional layouts
export function MuiStack() {
  return (
    <div>
      <Typography variant="h5" aria-label="Stack field">
        Stack
      </Typography>

      {` <Stack divider={<Divider orientation="vertical" flexItem />} /> `}
      <Stack
        sx={{border: '1px solid'}}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box>Box 1</Box>
        <Box>Box 2</Box>
      </Stack>
    </div>
  )
}

MuiStack.propTypes = {}
