import React from "react";
import { Helmet } from "react-helmet";
import config from "../../../data/SiteConfig";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import styled from 'styled-components'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Navbar />
        <div className="layout-container">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <html lang="en" />
          </Helmet>
          {children}
          <Footer /> 
        </div>
      </>
    );
  }
}


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Social = styled.div`
  display: flex;
  padding: 20px;  
  justify-content: center;
`
export const Footer = () => {
  return (
      <Social>
        <span style={{fontSize:"55px"}}>
          <a href="https://www.github.com/yaosarayin" class="fa fa-github" target="_blank"></a>
        </span>
        <a href="https://www.linkedin.com/in/yao-yin/" class="fa fa-2x fa-linkedin" target="_blank"></a>
        <a href="https://www.facebook.com/profile.php?id=100011439385585" class="fa fa-facebook fa-2x" target="_blank"></a>
        <a href="https://www.instagram.com/yaosarayin/?hl=en" class="fa fa-instagram fa-2x" target="_blank"></a>
        <a href="mailto: yyin@college.harvard.edu" class="fa fa-2x fa-google"></a>
      </Social>
  )
}