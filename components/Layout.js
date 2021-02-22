import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@emotion/react';
import { Reset } from '@styles/reset';
import { theme } from '@styles/Theme';
import { useState } from 'react';
import MDXComponents from '@components/MDXComponents';
import Footer from '@components/Footer/Footer';
import Sidebar from '@components/SideBar/SideBar';
import NavBar from '@components/NavBar/NavBar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {Reset}
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <NavBar isOpen={isOpen} toggle={toggle} />
          {children}
          <Footer theme={theme} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
};
export default Layout;