import React, {useState} from 'react'
import {
  Stack,
  InputAdornment,
  TextField,
  Typography,
  Box,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import FormatItalic from '@mui/icons-material/FormatItalic'

export function MuiRadio() {
  const [experience, setExperience] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(e.target.value)
  }

  return (
    <div>
      <Typography variant="h5" aria-label="Radio field">
        Radio
      </Typography>
      <Stack direction="row" spacing={2}>
        <FormControl error>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-label="job-experience-group-label"
            value={experience}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              control={<Radio size="small" color="secondary" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Stack>
    </div>
  )
}

MuiRadio.propTypes = {}
