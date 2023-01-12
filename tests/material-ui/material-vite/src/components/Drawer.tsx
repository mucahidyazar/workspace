import {Menu} from '@mui/icons-material'
import {Box, Drawer, IconButton, Link, Stack, Typography} from '@mui/material'
import {useState} from 'react'

export function MuiDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Typography variant="h5" aria-label="Drawer field">
        Drawer
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </IconButton>
        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <Typography variant="h6" component="div">
              Side Panel
            </Typography>
          </Box>
        </Drawer>
      </Stack>
    </div>
  )
}

MuiDrawer.propTypes = {}
