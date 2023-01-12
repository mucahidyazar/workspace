import React, {useState} from 'react'
import {Stack, Typography, Divider, Box, Grid} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'

// shortly Box = div
// shortly Stack = for one dimentional layouts
// shortly Grid = for two dimentional layouts
export function MuiGrid() {
  return (
    <div>
      <Typography variant="h5" aria-label="Grid field">
        Grid
      </Typography>
      <Box>- Grid component uses flexbox module</Box>
      <Box>- Grid consist of 12 columns</Box>
      <Box>- 5 breakpoints = xs, sm, md, lg, xl</Box>

      <Grid container my={4} spacing={1}>
        <Grid item xs={3} sm={6}>
          <Box bgcolor="success.light">Box 1</Box>
        </Grid>
        <Grid item xs={9} sm={6}>
          <Box bgcolor="success.light">Box 2</Box>
        </Grid>
        <Grid item xs={9} sm={6}>
          <Box bgcolor="success.light">Box 3</Box>
        </Grid>
        <Grid item xs={3} sm={6}>
          <Box bgcolor="success.light">Box 4</Box>
        </Grid>
      </Grid>

      {/* xs */}
      <Grid container my={4} spacing={1}>
        <Grid item xs>
          <Box bgcolor="success.light">Box 1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="success.light">Box 2</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="success.light">Box 3</Box>
        </Grid>
      </Grid>

      {/* xs="auto" */}
      <Grid container my={4} spacing={1}>
        <Grid item xs>
          <Box bgcolor="success.light">Box 1</Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor="success.light">Box 2</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="success.light">Box 3</Box>
        </Grid>
      </Grid>
    </div>
  )
}

MuiGrid.propTypes = {}
