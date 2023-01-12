import React, {useState} from 'react'
import {
  Stack,
  InputAdornment,
  TextField,
  Typography,
  Box,
  MenuItem,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import FormatItalic from '@mui/icons-material/FormatItalic'

export function MuiSelect() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  const handleCountriesChange = e => {
    setCountries(e.target.value)
  }

  return (
    <div>
      <Typography variant="h5" aria-label="select field">
        Select
      </Typography>
      <Stack direction="row" spacing={2}>
        <Box width="250px">
          <TextField
            name="country"
            label="Select Country"
            select
            value={country}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">United States</MenuItem>
            <MenuItem value="UK">United Kingdom</MenuItem>
          </TextField>
          <TextField
            name="countries"
            label="Select Countries"
            select
            value={countries}
            onChange={handleCountriesChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            size="small"
            color="secondary"
            helperText="Please select the countries"
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">United States</MenuItem>
            <MenuItem value="UK">United Kingdom</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </div>
  )
}

MuiSelect.propTypes = {}
