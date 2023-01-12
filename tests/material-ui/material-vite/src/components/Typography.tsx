import React from 'react'
import {Typography} from '@mui/material'

export function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h5">h3 heading</Typography>
      <Typography variant="h5">h4 heading</Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        h5 heading
      </Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        accusantium dignissimos itaque. Officia pariatur rerum, dolores eos
        itaque minima impedit ipsam exercitationem molestias recusandae enim
        animi. Minima, ducimus debitis voluptatibus sunt deleniti quia quibusdam
        incidunt voluptas, aliquam obcaecati ad nulla sequi illum? Cum odit
        reiciendis quis sunt q
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia adipisci,
        rem aperiam facilis molestiae qui nam sit sunt nesciunt nulla laborum?
        Quidem voluptas nemo quia, corrupti tempore expedita aliquid
        exercitationem dolorem voluptates! Cumque animi aliquam repudiandae
        error ex. Aspernatur, temporibus?
      </Typography>
    </div>
  )
}

MuiTypography.propTypes = {}
