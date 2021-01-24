import React from "react";
import { Helmet } from "react-helmet";
import {graphql, useStaticQuery, Link} from "gatsby"
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Layout, {Section} from "../components/Layout/Layout";

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

const Doodles = () => {
    const postEdges = useStaticQuery(pageQuery).allMarkdownRemark.edges;
    return (
      <Layout>
        <Section>
        <h1>Blog</h1>
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
        </div>
        </Section>
      </Layout>
    );
}

export default Doodles;

