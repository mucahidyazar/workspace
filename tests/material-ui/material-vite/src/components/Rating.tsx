import React, {useState} from 'react'
import {Stack, Checkbox, Typography, Rating} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'

export function MuiRating() {
  const [rating, setRating] = useState<number | null>(0)

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null,
  ) => {
    setRating(newValue)
  }

  return (
    <div>
      <Typography variant="h5" aria-label="Rating field">
        Rating
      </Typography>
      <Stack direction="row" spacing={2}>
        <Rating value={rating} onChange={handleChange} readOnly />
        <Rating value={rating} onChange={handleChange} highlightSelectedOnly />
      </Stack>
      <Stack direction="row" aria-label="Rating form control field">
        <Rating
          value={rating}
          onChange={handleChange}
          precision={0.01}
          size="large"
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
        />
      </Stack>
    </div>
  )
}

MuiRating.propTypes = {}
