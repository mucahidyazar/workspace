import React, {useState} from 'react'
import {Stack, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material'
import FormatBold from '@mui/icons-material/FormatBold'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import FormatItalic from '@mui/icons-material/FormatItalic'

export function MuiToggleButton() {
  const [formats, setFormats] = useState<string[]>([])

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[],
  ) => {
    setFormats(updatedFormats)
  }

  return (
    <div>
      <Typography variant="h5" aria-label="text formatting">
        Toggle Button
      </Typography>
      <Stack direction="row">
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          // if it is exculusive it works like radio
          // if it is not exclusive it works like checkbox
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  )
}

MuiToggleButton.propTypes = {}
