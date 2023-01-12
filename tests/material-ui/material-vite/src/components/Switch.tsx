import React, {useState} from 'react'
import {
  Stack,
  Checkbox,
  Typography,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
  FormHelperText,
  Switch,
} from '@mui/material'
import {Bookmark, BookmarkBorder} from '@mui/icons-material'

export function MuiSwitch() {
  const [checked, setChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }
  return (
    <div>
      <Typography variant="h5" aria-label="Switch field">
        Switch
      </Typography>
      <Stack direction="row" spacing={2}>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
        />
      </Stack>
    </div>
  )
}

MuiSwitch.propTypes = {}
