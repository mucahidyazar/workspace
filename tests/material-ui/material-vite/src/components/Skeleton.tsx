import {Avatar, Skeleton, Stack, Typography} from '@mui/material'
import {useEffect, useState} from 'react'

export function MuiSkeleton() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      <Typography variant="h5" aria-label="Skeleton field">
        Skeleton
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <Skeleton variant="text" width={40} height={40} animation={false} />
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        {/* For images */}
        <Skeleton variant="rectangular" width={250} height={160} />
      </Stack>
      <Stack sx={{width: '250px'}}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://source.unsplash.com/random"
            alt="skeleton"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{width: '100%', marginTop: '12px'}}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}
        </Stack>
        <Stack sx={{width: '80%'}}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>

              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <Typography variant="body1">React MUI Tutorial</Typography>
          )}
        </Stack>
      </Stack>
    </div>
  )
}

MuiSkeleton.propTypes = {}
