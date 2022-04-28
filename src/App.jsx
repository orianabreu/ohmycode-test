import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodosList from './pages/TodosList/TodosList';
import GlobalStyle from './theme/global';
import theme from './theme/theme';
import CreateTodo from './pages/CreateTodo/CreateTodo';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Menu />

        <Routes>
          <Route path='/' element={<TodosList />} />
          <Route path='create-your-todos' element={<CreateTodo />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
