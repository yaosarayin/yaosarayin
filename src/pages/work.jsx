import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {graphql, useStaticQuery, Link} from "gatsby"
import Layout, {Container} from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";


const WorkPage = () => {
      return (
        <Layout>
          <Container>
          <div className="home-container">
            <Helmet title={`Home | ${config.siteTitle}`} />
            <h1>My Work Experiences</h1>

          </div>
          </Container>
        </Layout>
      );
  }
  
  export default WorkPage;