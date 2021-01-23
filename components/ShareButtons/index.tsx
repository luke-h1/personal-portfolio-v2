import React from 'react';
import {
  EmailShareButton, TwitterShareButton, LinkedinShareButton, EmailIcon, TwitterIcon, LinkedinIcon,
} from 'react-share';

import styled from 'styled-components';

const ShareBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.2rem 0.4rem;

  * {
    margin: 0 0.2rem;
  }
`;

const ShareButtons = ({ location }) => (
  <ShareBtnWrap>
    <EmailShareButton url={location}>
      <EmailIcon round size={35} />
    </EmailShareButton>

    <TwitterShareButton url={location}>
      <TwitterIcon round size={35} />
    </TwitterShareButton>

    <LinkedinShareButton url={location}>
      <LinkedinIcon round size={35} />
    </LinkedinShareButton>
  </ShareBtnWrap>
);

export default ShareButtons;