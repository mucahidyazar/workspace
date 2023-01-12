import {Mail} from '@mui/icons-material'
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'

export function MuiList() {
  return (
    <div>
      <Typography variant="h5" aria-label="List field">
        List
      </Typography>
      <Stack direction="row" spacing={2}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                primary="List item 1"
                secondary="Secondary props text"
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 2" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 3" />
          </ListItem>
        </List>
      </Stack>
    </div>
  )
}

MuiList.propTypes = {}
