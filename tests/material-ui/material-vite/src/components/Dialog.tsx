import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'
import {useState} from 'react'

export function MuiDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Typography variant="h5" aria-label="Dialog field">
        Dialog | Modal
      </Typography>
      <Typography variant="subtitle2" aria-label="Table field">
        Description
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog
          open={isOpen}
          aria-labeledby="dialog-title"
          aria-describedby="dialog-description"
          onClose={() => setIsOpen(false)}
        >
          <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quod ex exercitationem repudiandae dolorum expedita ad,
              sunt cumque consectetur ipsum blanditiis at sint unde aut!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </div>
  )
}

MuiDialog.propTypes = {}
