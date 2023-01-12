import {ExpandMore} from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material'
import {useState} from 'react'

export function MuiAccordion() {
  const [expanded, setExpanded] = useState<string | boolean>(false)

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box>
      <Typography variant="h5" aria-label="Accordion field">
        Accordion
      </Typography>
      <Stack direction="row" spacing={2}>
        <Accordion>
          <AccordionSummary
            id="panel-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              modi laudantium inventore odit, ut sint officiis odio, impedit
              temporibus dolor laborum! Blanditiis animi soluta et repellat non
              repudiandae ea vel perspiciatis sequi facere! Inventore, sint cum
              veritatis excepturi.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>

      <Stack>
        <Typography variant="h5" aria-label="Accordion field">
          Accordion Group
        </Typography>
        <Stack spacing={2}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, 'panel1')
            }
          >
            <AccordionSummary
              id="panel-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMore />}
            >
              <Typography>Accordion Item 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora modi laudantium inventore odit, ut sint officiis odio,
                impedit temporibus dolor laborum! Blanditiis animi soluta et
                repellat non repudiandae ea vel perspiciatis sequi facere!
                Inventore, sint cum veritatis excepturi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, 'panel2')
            }
          >
            <AccordionSummary
              id="panel-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMore />}
            >
              <Typography>Accordion Item 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora modi laudantium inventore odit, ut sint officiis odio,
                impedit temporibus dolor laborum! Blanditiis animi soluta et
                repellat non repudiandae ea vel perspiciatis sequi facere!
                Inventore, sint cum veritatis excepturi.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </Box>
  )
}

MuiAccordion.propTypes = {}
