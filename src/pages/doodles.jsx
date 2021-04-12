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
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
          <h3><a href="mailto:yaosarayin@gmail.com">Contact me</a> for more inquiries. Or find me on <a href="https://www.redbubble.com/people/yaosarayin/shop?asc=u">RedBubble</a>.</h3>
        </div>
        </Section>
      </Layout>
    );
}

export default Doodles;


