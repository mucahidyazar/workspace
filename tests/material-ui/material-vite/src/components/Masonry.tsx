import {Paper, Stack, Typography} from '@mui/material'
import {Masonry} from '@mui/lab'

const heights = [
  120, 210, 150, 180, 140, 130, 160, 190, 220, 170, 200, 230, 240, 250, 260,
]
export function MuiMasonry() {
  return (
    <div>
      <Typography variant="h5" aria-label="Masonry field">
        Masonry
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: height,
                width: '100%',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Stack>
    </div>
  )
}

MuiMasonry.propTypes = {}
