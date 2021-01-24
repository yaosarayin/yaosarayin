import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {graphql, useStaticQuery, Link} from "gatsby"
import Layout, {Section} from "../components/Layout/Layout";
import config from "../../data/SiteConfig";
import shenzhen from "../../static/shenzhen.svg";
import ojai from "../../static/ojai.svg";

const HomePage = () => {
      return (
        <Layout>
          <Helmet title={`Home | ${config.siteTitle}`} />
          <Section>
            <h1>Hi, I am Yao!</h1>
          </Section>
          <img src={shenzhen}></img>
          <Section>
            <p>I grew up in Shenzhen, a young city that has become the "Silicon Valley" in China in the past decade. I love its vibrant, innovative, and extremely welcoming vibe - but most importantly, I love the food.</p>
            <p>
            When I was 14, I went away to boarding school in Ojai, a beautiful rural town in southern California with oranges and avocados all year around. I spent a lot of time recording the beauty of nature and my thoughts with colors and lines.
            </p>
            <p>
            I am now a freshman at Harvard College in Cambridge, MA. I am interested in persuing Physics/CS as a joint concentration. But I have no idea what I am going to do with my life. Still exploring & Learning.</p>
          </Section>
          <img src={ojai}></img>
        </Layout>
      );
  }

export default HomePage;
  