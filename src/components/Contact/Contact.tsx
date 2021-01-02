import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import SEO from '../seo';

import {
  ContactWrapper,
  Alternatives,
  IconWrapper,
  EmailIcon,
  LinkedIn,
  Github,
  ContactContainer,
  ContactIntro,
} from './ContactElements';

const Contact = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Contact" />

      <ContactContainer>
        <ContactIntro>
          <h1>Get In Touch</h1>
        </ContactIntro>
      </ContactContainer>
      <ContactWrapper>
        <Alternatives>
          <h3>You can reach me on:</h3>
          <br />
          <IconWrapper>
            <a
              href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/lukehowsam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"

            >
              <LinkedIn />
            </a>
            {' '}
            <a
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <Github />
            </a>
          </IconWrapper>
        </Alternatives>
      </ContactWrapper>
    </>
  </ThemeProvider>
);
Contact.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Contact;