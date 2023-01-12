import React, {useState} from 'react'
import {Stack, Box, Typography, TextField} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'

// shortly Box = div
export function MuiBox() {
  return (
    <div>
      <Typography variant="h5" aria-label="Box field">
        Box
      </Typography>
      <Box>I am Box1</Box>
      <Box component="section">I am a section Box</Box>
      <Box
        component="aside"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        I am a aside Box
      </Box>
      <Box display="flex" height="100px" width="100px" bgcolor="success.light">
        I am inline style box
      </Box>
      <Box p={2} bgcolor="error.light">
        I am inline style box
        {`p={2} === padding: 16px`}
      </Box>
    </div>
  )
}

MuiBox.propTypes = {}
