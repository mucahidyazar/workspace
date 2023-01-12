import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'

// Paper is used to display shadowed content and build Card components.
export function MuiCard() {
  return (
    <Box>
      <Typography variant="h5" aria-label="Card field">
        Card
      </Typography>
      <Card sx={{backgroundColor: 'error.light'}}>
        <CardMedia
          component="img"
          height={140}
          image="https://source.unsplash.com/random"
          alt="random image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MUI Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            voluptate itaque. Vel, hic fugit! Distinctio minus eaque accusamus
            deleniti! Esse.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

MuiCard.propTypes = {}
