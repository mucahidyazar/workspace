import React from 'react'
import PropTypes from 'prop-types'
import {AiFillYoutube} from 'react-icons/ai'
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material'
import {appBar, flexAlignCenter, toolbarWrapper, logoText} from '../../styles'

export function AppNavMenu(props) {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{mr: 2}}
            >
              <AiFillYoutube size={32} />
              <Typography variant="h6" component="div" sx={logoText}>
                Youtube
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
