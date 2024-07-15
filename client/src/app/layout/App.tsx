import Catalog from "../../features/catalog/Catalog";
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";

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
      <CssBaseline />
      <Header darkMode={darkmode} handleThemeChange={handleThemeChange}  />
      <Container>
        <Catalog />
      </Container>

    </ThemeProvider>
  );
}

export default App;
