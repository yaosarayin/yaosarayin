import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout, {Section} from "../components/Layout/Layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout>
        <Section>
        <div className="post-wrapper">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{post.title}</h1>
            <img src={`http://www.yaosarayin.com/${ post.cover }?nf_resize=fit&h=300`} width={500}/>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
            {/* <Disqus postNode={postNode} /> */}
            <Footer config={config} />
          </div>
        </div>
        </Section>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
