import { Alert, Box, Button, CircularProgress, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import { updateAdbTest } from "../../apis/android/adb"
import PhoneIcon from '@mui/icons-material/PhoneAndroid'
import { Link } from "react-router-dom"

export const CheckAdbUpdate = () => {
  let [loading, setLoading] = useState(true)
  let [working, setWorking] = useState(false)
  let [adbPath, setAdbPath] = useState('')
  let [devices, setDevices] = useState([])

  let updateAdb = useCallback(async () => {
    setLoading(true)
    try {
      let { devices } = await updateAdbTest(adbPath)
      setWorking(true)
      setDevices(devices)
    } catch (e) {
      setWorking(false)
    } finally {
      setLoading(false)
    }
  }, [adbPath])

  useEffect(() => {
    updateAdb()
  }, [])

  return <Stack spacing={2}>
    {loading
      ? <CircularProgress />
      : working
        ? <>
          <Alert severity="success">ADB working! </Alert>
          {devices.length
            ? <>
              <Typography> Choose a device to automate:</Typography>
              <nav aria-label="secondary mailbox folders">
                <List>
                  {devices.map(x => <ListItem
                    disablePadding
                    key={x}
                    component={Link}
                    to={`/platform/android/edit?device=${encodeURIComponent(x)}`}
                  >
                    <ListItemButton >
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText primary={x} />
                    </ListItemButton>
                  </ListItem>)}
                </List>
              </nav>
            </>
            : <Alert severity="info">No device found!</Alert>
          }
          <TextField label="connect to new device and refresh device list" variant="outlined" fullWidth />
          <Button variant="outlined">CONNECT</Button>
        </>
        : <>
          <Alert severity="error" title={`check backend output for detailed error info`}>ADB not working!</Alert>
          <TextField label="ADB path" variant="standard" fullWidth />
          <Button variant="outlined">UPDATE</Button>
        </>}

  </Stack>
}