import styled from '@emotion/styled'
import {Box, colors, createTheme, ThemeProvider} from '@mui/material'
import {useState} from 'react'
import {MuiAccordion} from './components/Accordion'
import {MuiAlert} from './components/Alert'
import {MuiAutoComplete} from './components/AutoComplete'
import {MuiAvatar} from './components/Avatar'
import {MuiBadge} from './components/Badge'
import {MuiBottomNavigation} from './components/BottomNavigation'
import {MuiBox} from './components/Box'
import {MuiBreadcrumbs} from './components/Breadcrumbs'
import {MuiButton} from './components/Button'
import {MuiButtonGroup} from './components/ButtonGroup'
import {MuiCard} from './components/Card'
import {MuiCheckbox} from './components/Checkbox'
import {MuiChip} from './components/Chip'
import {MuiDatePicker} from './components/DatePicker'
import {MuiDialog} from './components/Dialog'
import {MuiDrawer} from './components/Drawer'
import {MuiGrid} from './components/Grid'
import {MuiImageList} from './components/ImageList'
import {MuiLink} from './components/Link'
import {MuiList} from './components/List'
import {MuiLoadingButton} from './components/LoadingButton'
import {MuiMasonry} from './components/Masonry'
import {MuiNavbar} from './components/Navbar'
import {MuiPaper} from './components/Paper'
import {MuiProggress} from './components/Proggress'
import {MuiRadio} from './components/Radio'
import {MuiRating} from './components/Rating'
import {MuiResponsiveness} from './components/Responsiveness'
import {MuiSelect} from './components/Select'
import {MuiSkeleton} from './components/Skeleton'
import {MuiSnackbar} from './components/SnackbarToast'
import {MuiSpeedDial} from './components/SpeedDial'
import {MuiStack} from './components/Stack'
import {MuiSwitch} from './components/Switch'
import {MuiTable} from './components/Table'
import {MuiTabs} from './components/Tabs'
import {MuiTextField} from './components/TextField'
import {MuiTimeline} from './components/TimeLine'
import {MuiToggleButton} from './components/ToggleButton'
import {MuiTooltip} from './components/Tooltip'
import {MuiTypography} from './components/Typography'
import {UseSyncExternalStore} from './components/UseSyncExternalStore'

const StyledBox = styled(Box)(({theme}) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.status.danger,
}))

const theme = createTheme({
  // ### START
  // to do this create a index.d.ts inside /src folder as I did
  status: {
    danger: colors.red[500],
  },
  // ### FNISH
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[900],
      lighter: colors.grey[100],
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UseSyncExternalStore />
      <hr />
      <MuiResponsiveness />
      <hr />
      <MuiMasonry />
      <hr />
      <MuiTimeline />
      <hr />
      <MuiTabs />
      <hr />
      <MuiDatePicker />
      <hr />
      <MuiLoadingButton />
      <hr />
      <MuiSkeleton />
      <hr />
      <MuiProggress />
      <hr />
      <MuiDialog />
      <hr />
      <MuiSnackbar />
      <hr />
      <MuiAlert />
      <hr />
      <MuiTable />
      <hr />
      <MuiTooltip />
      <hr />
      <MuiChip />
      <hr />
      <MuiList />
      <hr />
      <MuiBadge />
      <hr />
      <MuiAvatar />
      <hr />
      <MuiBottomNavigation />
      <hr />
      <MuiSpeedDial />
      <hr />
      <MuiDrawer />
      <hr />
      <MuiDrawer />
      <hr />
      <MuiBreadcrumbs />
      <hr />
      <MuiLink />
      <hr />
      <MuiNavbar />
      <hr />
      <MuiImageList />
      <hr />
      <MuiAccordion />
      <hr />
      <MuiCard />
      <hr />
      <MuiPaper />
      <hr />
      <MuiGrid />
      <hr />
      <MuiStack />
      <hr />
      <MuiBox />
      <hr />
      <MuiAutoComplete />
      <hr />
      <MuiRating />
      <hr />
      <MuiSwitch />
      <hr />
      <MuiCheckbox />
      <hr />
      <MuiRadio />
      <hr />
      <MuiSelect />
      <hr />
      <MuiTextField />
      <hr />
      <MuiToggleButton />
      <hr />
      <MuiButtonGroup />
      <hr />
      <MuiButton />
      <hr />
      <MuiTypography />
    </ThemeProvider>
  )
}

export default App
