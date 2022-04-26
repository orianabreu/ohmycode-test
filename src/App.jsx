import React from "react";
import { ThemeProvider } from "styled-components";

import TodosList from "./pages/TodosList/TodosList";
import GlobalStyle from "./theme/global";
import theme from "./theme/theme";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TodosList />
      </ThemeProvider>
    </div>
  );
}

export default App;
