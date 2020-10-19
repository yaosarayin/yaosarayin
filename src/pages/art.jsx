import React from "react";
import { Helmet } from "react-helmet";
import {graphql, useStaticQuery, Link} from "gatsby"
import Layout, {Container} from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query {
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

const ArtPage = () => {
    const postEdges = useStaticQuery(pageQuery).allMarkdownRemark.edges;
    return (
      <Layout>
        <Container>
        <h1>Art Works</h1>
          <div className="arts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <PostListing postEdges={postEdges} />
          </div>
        </Container>
      </Layout>
    );
}

export default ArtPage;


