import {Favorite, Home, Person} from '@mui/icons-material'
import {
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Typography,
} from '@mui/material'
import {useState} from 'react'

export function MuiBottomNavigation() {
  const [value, setValue] = useState(0)

  return (
    <div>
      <Typography variant="h5" aria-label="BottomNavigation field">
        BottomNavigation Bunu gormek icin sayfanin en altina bakin
      </Typography>
      <Stack direction="row" spacing={2}>
        <BottomNavigation
          sx={{width: '100%', position: 'absolute', bottom: 0}}
          value={value}
          onChange={(_e, newValue) => setValue(newValue)}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Profile" icon={<Person />} />
        </BottomNavigation>
      </Stack>
    </div>
  )
}

MuiBottomNavigation.propTypes = {}
