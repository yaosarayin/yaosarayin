import React from 'react';
import {Link} from "gatsby"
import styled from "styled-components"



class Navbar extends React.Component {
  // state = {
  //       current: 'Home',
  //     };

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({ current: e.key });
  // };

  render() {
    // const { current } = this.state;
    const Menu = styled.div`
      display: flex;
    `;

    const MenuItem = styled.div`
      text-align: center; /* Aligns <a> inside of NavIcon div */
      margin-bottom: 0;   /* Puts space between NavItems */
      padding: 20px;
      margin-right: 20px;
      a, p {
        font-size: 1em;
        color: grey;
        text-decoration: none;
        :hover {
          opacity: 0.7;
        }  
      }
      .dropdown-content {
        display: none;
        background-color: #f9f9f9;
        /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
        z-index: 1;
      }

      /* Show the dropdown menu on hover */
      &:hover .dropdown-content {
        display: block;
        line-break: wrap;
      }
    
      & > div {
        position: absolute
      }

      /* Change the background color of the dropdown button when the dropdown content is shown */
      .dropdown:hover .dropbtn {
        background-color: #3e8e41;
      }
    `;

    return (
      <Menu>
        <MenuItem key="Home">
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem key="Work">
          <Link to="/work">Work</Link>
        </MenuItem>
        <MenuItem key="Research">
          <Link>Research</Link>
          <div>
            <MenuItem key="1" className="dropdown-content"><Link to="/SLSNe">Superluminous Supernovae</Link></MenuItem>
            <MenuItem key="2" className="dropdown-content"><Link to="/past-research">Past Research</Link></MenuItem>
          </div>
        </MenuItem>
        <MenuItem key="Doodles">
          <Link to="/doodles">Art</Link>
        </MenuItem>
        {/* <MenuItem key="WeChat">
          <a href="#" target="_blank" rel="noopener noreferrer">
          </a>
        </MenuItem> */}
      </Menu>
    );
  }
}

export default Navbar;

