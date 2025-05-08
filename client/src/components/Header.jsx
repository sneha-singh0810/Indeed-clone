import React from 'react'
import {AppBar} from '@mui/material';
import { Toolbar , styled } from '@mui/material';
import { routePath } from "../routes/route";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none'
    }
})

const Header = () => {
    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
  return (
    <div>
        
        <StyledAppBar>
            <Toolbar>
            <Link to={routePath.home}>
                    <img src={logo} alt="logo" style={{ width: 95, marginBottom: 6 }} />
                </Link>
                <Link to={routePath.create}>Post a job</Link>
                <Link to={routePath.posts}>Find jobs</Link>
            </Toolbar>
        </StyledAppBar>
      
    </div>
  )
}

export default Header
