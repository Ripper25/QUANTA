import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { ResearchSection } from './components/ResearchSection';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <ResearchSection />
    </ThemeProvider>
  );
};

export default App;
