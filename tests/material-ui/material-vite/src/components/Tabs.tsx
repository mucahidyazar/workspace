import {Box, Stack, Typography, Tab} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import React, {useState} from 'react'
import {Favorite} from '@mui/icons-material'

export function MuiTabs() {
  const [value, setValue] = useState<string | number>(1)
  return (
    <div>
      <Typography variant="h5" aria-label="Tabs field">
        Tabs
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack spacing={2}>
        <TabContext value={value}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <TabList
              aria-label="tabs example"
              onChange={(e: React.SyntheticEvent, newValue: string) => {
                setValue(newValue)
              }}
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab
                label="Tab 1"
                value="1"
                icon={<Favorite />}
                iconPosition="start"
              />
              <Tab label="Tab 2" value="2" disabled />
              <Tab label="Tab 3" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Tab Panel 1</TabPanel>
          <TabPanel value="2">Tab Panel 2</TabPanel>
          <TabPanel value="3">Tab Panel 3</TabPanel>
        </TabContext>

        <TabContext value={value}>
          <Box sx={{borderBottom: 1, borderColor: 'divider', width: '300px'}}>
            <TabList
              aria-label="tabs example"
              onChange={(e: React.SyntheticEvent, newValue: string) => {
                setValue(newValue)
              }}
              textColor="secondary"
              indicatorColor="secondary"
              centered
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="Tab 1"
                value="1"
                icon={<Favorite />}
                iconPosition="start"
              />
              <Tab label="Tab 2" value="2" disabled />
              <Tab label="Tab 4" value="4" />
              <Tab label="Tab 5" value="5" />
              <Tab label="Tab 6" value="6" />
              <Tab label="Tab 7" value="7" />
              <Tab label="Tab 8" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">Tab Panel 1</TabPanel>
          <TabPanel value="2">Tab Panel 2</TabPanel>
          <TabPanel value="3">Tab Panel 3</TabPanel>
          <TabPanel value="4">Tab Panel 4</TabPanel>
          <TabPanel value="5">Tab Panel 5</TabPanel>
          <TabPanel value="6">Tab Panel 6</TabPanel>
          <TabPanel value="7">Tab Panel 7</TabPanel>
          <TabPanel value="8">Tab Panel 8</TabPanel>
        </TabContext>
      </Stack>
    </div>
  )
}

MuiTabs.propTypes = {}
