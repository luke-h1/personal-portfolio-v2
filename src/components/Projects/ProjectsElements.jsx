/* eslint-disable */
import styled from "styled-components"
import { DiGithubBadge } from "react-icons/di"
import { IoIosBrowsers } from "react-icons/io"

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background: ${props => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 {
    font-size: clamp(1rem, 8vw, 2.7rem);
    color: ${props => props.theme.lightTextColor};
    font-weight: 700;
    text-align: left;
  }
`
// 1139


export const TechWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 1rem 0 12px 0;
    border-bottom: 1px solid ${props => props.theme.textColor};

    font-weight: 700;
    color: ${props => props.theme.textColor};
  }
  span {
    font-weight: 700;
    color: ${(props) => props.theme.textColor};
  }
`

export const Links = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 5px 0 5px;
  }
`

export const GithubLink = styled(DiGithubBadge)`
  color: #000;
  font-size: 35px;
`

export const SiteLink = styled(IoIosBrowsers)`
  color: #000;
  font-size: 35px;
`

export const ProjectIntro = styled.div`
  margin-top: 10rem;
`

export const ProjectFlex = styled.div`
  background: ${props => props.theme.secondaryBackgroundColor};
  min-height: 50vh;
  padding: 2rem;
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  @media(max-width: 1139px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 764px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 350px;
  height: 280px;
  margin-bottom: 1em;
  margin-top: 1em;
  text-align: center;
  h1 {
    font-weight: 500;
    font-size: 25px;
  }
`

export const ButtonWrap = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
