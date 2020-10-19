import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {graphql, useStaticQuery, Link} from "gatsby"
import Layout, {Container} from "../components/Layout/Layout";
import config from "../../data/SiteConfig";
import shenzhen from "../../static/shenzhen.svg";

const HomePage = () => {
      return (
        <Layout>
          <Container>
            <Helmet title={`Home | ${config.siteTitle}`} />
            <h1>Hi, I am Yao!</h1>
          </Container>
          <img src={shenzhen}></img>
        </Layout>
      );
  }

export default HomePage;
  