import {Edit, FileCopyOutlined, Print, Share} from '@mui/icons-material'
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Typography,
} from '@mui/material'

export function MuiSpeedDial() {
  return (
    <div>
      <Typography variant="h5" aria-label="SpeedDial field">
        SpeedDial - Bunu gormek icin sag taraftaki + butonuna bakin
      </Typography>
      <Stack direction="row" spacing={2}>
        <SpeedDial
          ariaLabel="Navigation speed dial"
          sx={{position: 'absolute', top: 16, right: 16}}
          icon={<SpeedDialIcon openIcon={<Edit />} />}
        >
          <SpeedDialAction icon={<FileCopyOutlined />} tooltipTitle="Copy" />
          <SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
          <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
        </SpeedDial>
      </Stack>
    </div>
  )
}

MuiSpeedDial.propTypes = {}
