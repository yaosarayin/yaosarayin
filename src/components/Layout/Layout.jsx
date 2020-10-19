import React from "react";
import { Helmet } from "react-helmet";
import config from "../../../data/SiteConfig";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import styled from 'styled-components'

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Navbar />
        <div className="layout-container">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          {children}
        </div>
      </>
    );
  }
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
