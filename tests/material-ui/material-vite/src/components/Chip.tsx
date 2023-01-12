import {Face} from '@mui/icons-material'
import {Avatar, Chip, Stack, Typography} from '@mui/material'
import {useState} from 'react'

export function MuiChip() {
  const [chips, setChips] = useState(['Chip1', 'Chip2', 'Chip3'])

  const handleDelete = (chip: string) => {
    setChips(chips => chips.filter(c => c !== chip))
  }

  return (
    <div>
      <Typography variant="h5" aria-label="Chip field">
        Chip
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Chip small" color="primary" size="small" />
        <Chip label="Chip" color="primary" />
        <Chip label="Chip outlined" color="primary" variant="outlined" />
        <Chip
          label="Chip avatar"
          color="primary"
          avatar={<Avatar>VY</Avatar>}
        />
        <Chip label="Chip icon" color="primary" icon={<Face />} />
        <Chip
          label="Chip click"
          color="primary"
          onClick={() => alert('Clicked')}
        />
        <Chip
          label="Chip delete"
          color="error"
          onClick={() => alert('Clicked')}
          onDelete={() => alert('Delete handler called')}
        />
        {chips.map(chip => (
          <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ))}
      </Stack>
    </div>
  )
}

MuiChip.propTypes = {}
