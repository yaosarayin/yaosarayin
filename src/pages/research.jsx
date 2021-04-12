import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {graphql, useStaticQuery, Link} from "gatsby"
import Layout from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";


const ResearchPage = () => {
      return (
        <Layout>
          <div className="home-container">
            <Helmet title={`Home | ${config.siteTitle}`} />
            <h1>page coming soon...</h1>

          </div>
        </Layout>
      );
  }
  
  export default ResearchPage;