import {Avatar, AvatarGroup, Stack, Typography} from '@mui/material'

export function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Typography variant="h5" aria-label="Avatar field">
        Avatar
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
        <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt="John Doe"
          />
          <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
          <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
          <Avatar
            src="https://material-ui.com/static/images/avatar/2.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar
          variant="square"
          sx={{bgcolor: 'primary.light', width: 100, height: 100}}
        >
          BS
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{bgcolor: 'success.light', width: 100, height: 100}}
        >
          CS
        </Avatar>
      </Stack>
    </Stack>
  )
}

MuiAvatar.propTypes = {}
