import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from '@mui/material'

export function MuiImageList() {
  return (
    <Box>
      <Typography variant="h5" aria-label="ImageList field">
        ImageList
      </Typography>
      <Stack spacing={2}>
        <ImageList
          sx={{width: '500px', height: '400px', overflow: 'hidden'}}
          cols={3}
          rowHeight={164}
        >
          {imageList.map(item => (
            <ImageListItem key={item.src}>
              <img
                src={item.src}
                srcSet={item.src}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList
          sx={{width: '500px', height: '400px', overflow: 'hidden'}}
          cols={3}
          variant="woven"
          gap={8}
        >
          {imageList.map(item => (
            <ImageListItem key={item.src}>
              <img
                src={item.src}
                srcSet={item.src}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  )
}

MuiImageList.propTypes = {}

const imageList = [
  {
    title: 'Image 1',
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  },
  {
    title: 'Image 2',
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  },
  {
    title: 'Image 3',
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  },
  {
    title: 'Image 4',
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  },
]
