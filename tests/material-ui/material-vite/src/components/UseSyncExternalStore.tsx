import {Box, Button, Stack, Typography} from '@mui/material'
import {useEffect, useState, useSyncExternalStore} from 'react'
import {store} from '../store'

function useStore(selector = (state: any) => state) {
  return useSyncExternalStore(store.subscribe, () => selector(store.getState()))
}

const IncrementValue = ({item}: any) => {
  const state = useStore()
  return (
    <Button
      onClick={() => {
        store.setState({
          ...state,
          [item]: state[item] + 1,
        })
      }}
      variant="contained"
    >
      Increment {item}
    </Button>
  )
}

const DisplayValue = ({item}: any) => (
  <Box>
    {item}: {useStore(state => state[item])}
  </Box>
)

export function UseSyncExternalStore() {
  return (
    <div>
      <Typography variant="h5" aria-label="Paper field">
        UseSyncExternalStore
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <IncrementValue item="value1" />
        <DisplayValue item="value1" />
        <IncrementValue item="value2" />
        <DisplayValue item="value2" />
      </Stack>
    </div>
  )
}

UseSyncExternalStore.propTypes = {}
