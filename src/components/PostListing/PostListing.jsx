import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components'


const Masonry = styled.div`
  -webkit-column-count: 3;
  -moz-column-count:3;
  column-count: 3;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em;
  margin: 1.5em;
  padding: 0;
  -moz-column-gap: 1.5em;
  -webkit-column-gap: 1.5em;
  column-gap: 1.5em;
  font-size: .85em;

.item {
  display: inline-block;
  background: #fff;
  margin: 0 0 1.5em;
  width: 100%;
  -webkit-transition: 1s ease all;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-shadow: 2px 2px 4px 0 #ccc;
  position: relative;
  text-align: center;
  color: white;
  line-height: 0;
}
.item img{
  max-width:100%;
}

.top-left {
  position: absolute;
  top: 16px;
  left: 16px;
}

tiny {
  font-size: 50%;
  padding-left: 30px;
}

@media only screen and (max-width: 320px) {
  .masonry {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
  }
}

@media only screen and (min-width: 321px) and (max-width: 768px){
  .masonry {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
  }
}
@media only screen and (min-width: 769px) {
  .masonry {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
  }
}`

export const PostListing = (props) => {
  const getPostList = () => {
    const postList = [];
    props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
    const postList = getPostList();
    console.log(postList)
    return (
        /* Your post list here. */
        <Masonry> {
        postList.map(post => (
            <div className="item">
              <Link to={post.path} key={post.title}>
                <img src={`http://localhost:8000/${ post.cover }?nf_resize=fit&h=300`}/>
                {/* <div class="top-left">{ post.title }</div> */}
              </Link>
            </div>
        ))}
        </Masonry>
    );
}

export default PostListing;
