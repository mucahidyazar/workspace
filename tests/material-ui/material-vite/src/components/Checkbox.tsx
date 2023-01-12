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
} from '@mui/material'
import {Bookmark, BookmarkBorder} from '@mui/icons-material'

export function MuiCheckbox() {
  const [acceptTnC, setAcceptTnC] = useState(false)
  const [skills, setSkills] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(e.target.checked)
  }

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value)
    if (index === -1) {
      setSkills([...skills, e.target.value])
    } else {
      setSkills(skills.filter(skill => skill !== e.target.value))
    }
  }

  return (
    <div>
      <Typography variant="h5" aria-label="Checkbox field">
        Checkbox
      </Typography>
      <Stack direction="row" spacing={2}>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={handleChange}
            />
          }
        />
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="HTML"
                  checked={skills.includes('HTML')}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="CSS"
                  checked={skills.includes('CSS')}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  value="Javascript"
                  checked={skills.includes('Javascript')}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Stack>
    </div>
  )
}

MuiCheckbox.propTypes = {}
