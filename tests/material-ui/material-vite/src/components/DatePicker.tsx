import {Box, Stack, TextField, Typography} from '@mui/material'
import {useState} from 'react'
import {LocalizationProvider} from '@mui/x-date-pickers'
import dayjs, {Dayjs} from 'dayjs'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {TimePicker} from '@mui/x-date-pickers/TimePicker'
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker'
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker'

export function MuiDatePicker() {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2014-08-18T21:11:54'))

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Typography variant="h5" aria-label="DatePicker field">
          DatePicker
        </Typography>
        <Typography variant="subtitle2" aria-label="Table field">
          Description: pnpm install date-fns @date-io/date-fns
        </Typography>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} />}
          />
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} />}
          />
        </Stack>
      </div>
    </LocalizationProvider>
  )
}

MuiDatePicker.propTypes = {}
