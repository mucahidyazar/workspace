import {Delete} from '@mui/icons-material'
import {IconButton, Stack, Tooltip, Typography} from '@mui/material'

export function MuiTooltip() {
  return (
    <div>
      <Typography variant="h5" aria-label="Tooltip field">
        Tooltip
      </Typography>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Delete">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>

        {/* arrow prop show us arrow triangle */}
        <Tooltip
          title="Delete"
          placement="right"
          arrow
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  )
}

MuiTooltip.propTypes = {}
