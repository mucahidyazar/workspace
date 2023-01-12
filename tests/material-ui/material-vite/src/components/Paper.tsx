import {Box, Paper, Stack, Typography} from '@mui/material'

// Paper is used to display shadowed content and build Card components.
export function MuiPaper() {
  return (
    <Box>
      <Paper sx={{padding: 2, backgroundColor: 'primary.main'}} elevation={8}>
        <Typography variant="h5" aria-label="Paper field">
          Paper
        </Typography>
      </Paper>
    </Box>
  )
}

MuiPaper.propTypes = {}
