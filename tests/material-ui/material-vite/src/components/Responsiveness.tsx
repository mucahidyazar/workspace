import {Box, Paper, Stack, Typography} from '@mui/material'
import {Masonry} from '@mui/lab'

export function MuiResponsiveness() {
  return (
    <div>
      <Typography variant="h5" aria-label="Responsiveness field">
        Responsiveness
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
      >
        <Box
          sx={{
            height: '300px',
            width: {
              xs: 100, // (min-width: 0px)
              sm: 200, // (min-width: 600px)
              md: 300, // (min-width: 900px)
              lg: 400, // (min-width: 1200px)
              xl: 500, // (min-width: 1536px)
            },
            bgcolor: 'primary.main',
          }}
        >
          Box
        </Box>
      </Stack>
    </div>
  )
}

MuiResponsiveness.propTypes = {}
