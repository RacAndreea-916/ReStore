import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const palleteType = darkmode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background:{
       default: palleteType==='light' ? '#eaeaea' : '#121212'
      }
    }
  })
  function handleThemeChange (){
      setDarkmode(!darkmode);
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkmode} handleThemeChange={handleThemeChange}  />
      <Container>
        <Outlet />
      </Container>

    </ThemeProvider>
  );
}

export default App;
