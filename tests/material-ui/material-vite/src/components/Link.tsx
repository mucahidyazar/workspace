import {Box, Link, Stack, Typography} from '@mui/material'

export function MuiLink() {
  return (
    <Box>
      <Typography variant="h5" aria-label="Link field">
        Link
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link href="#" underline="none">
          Underline none Link
        </Link>
        <Link href="#" color="secondary" underline="hover">
          Hover Underline Link
        </Link>
        <Typography variant="h6">
          <Link href="#" color="error" underline="hover">
            Hover Underline Link
          </Link>
        </Typography>
      </Stack>
    </Box>
  )
}

MuiLink.propTypes = {}
