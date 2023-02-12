import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Nav from "../components/Nav";
import { Outlet } from 'react-router-dom'
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { Copyright } from '@mui/icons-material';


export default function Layout() {
  return <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <CssBaseline />
    <Box
      component="header"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Nav />
      </Container>
    </Box>
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <Outlet />
    </Container>
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  </Box>

}