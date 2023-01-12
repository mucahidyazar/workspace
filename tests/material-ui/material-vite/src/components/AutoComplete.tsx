import React, {useState} from 'react'
import {Stack, Autocomplete, Typography, TextField} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'

type Skill = {
  id: number
  label: string
}
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vue',
  'Kotlin',
  'Less',
  'Stylus',
  'BEM',
  'OOCSS',
]

const skillList = skills.map((skill, index) => ({
  id: index,
  label: skill,
}))

export function MuiAutoComplete() {
  const [value, setValue] = useState<string | null>(null)
  const [skill, setSkill] = useState<Skill | null>(null)

  return (
    <div>
      <Typography variant="h5" aria-label="AutoComplete field">
        AutoComplete
      </Typography>
      <Stack direction="row" spacing={2}>
        <Autocomplete
          options={skills}
          // label is like placeholder
          renderInput={params => <TextField {...params} label="Skills" />}
          value={value}
          onChange={(_event: any, newValue: string | null) => {
            setValue(newValue)
          }}
          // with freeSolo you can add random value that is not in the list
          freeSolo
        />
      </Stack>
      <Typography variant="h5" aria-label="AutoComplete field">
        AutoCompleteList with object list
      </Typography>
      <Stack direction="row" spacing={2}>
        <Autocomplete
          options={skillList}
          renderInput={params => <TextField {...params} label="Skills" />}
          value={skill}
          onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
        />
      </Stack>
    </div>
  )
}

MuiAutoComplete.propTypes = {}
