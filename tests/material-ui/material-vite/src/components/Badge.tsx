import {Mail} from '@mui/icons-material'
import {Badge, Stack, Typography} from '@mui/material'

export function MuiBadge() {
  return (
    <div>
      <Typography variant="h5" aria-label="Badge field">
        Badge
      </Typography>
      <Stack direction="row" spacing={2}>
        <Badge color="primary" badgeContent={5}>
          <Mail />
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero>
          <Mail />
        </Badge>
        <Badge color="primary" badgeContent={423}>
          <Mail />
        </Badge>
        <Badge color="primary" badgeContent={423} max={1000}>
          <Mail />
        </Badge>
        <Badge color="primary" variant="dot" invisible>
          <Mail />
        </Badge>
      </Stack>
    </div>
  )
}

MuiBadge.propTypes = {}
