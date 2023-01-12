import React, {useState} from 'react'
import {Stack, InputAdornment, TextField, Typography} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import FormatItalic from '@mui/icons-material/FormatItalic'

export function MuiTextField() {
  const [value, setValue] = useState('')

  return (
    <div>
      <Typography variant="h5" aria-label="text field">
        Text Field
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Firstname"
          variant="outlined"
          value={value}
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'You are good to go'}
        />
        <TextField label="Lastname" variant="filled" />
        <TextField label="Address" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Firstname" variant="outlined" size="small" />
        <TextField
          label="Password"
          type="password"
          variant="filled"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField
          label="Read Only"
          variant="standard"
          required
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Read Only"
          variant="standard"
          required
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>
      <hr />
      <Typography variant="h5" aria-label="text field">
        InputAdornment / Suffix = xx $ / Prefix = $ xx
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Visibility />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </div>
  )
}

MuiTextField.propTypes = {}
