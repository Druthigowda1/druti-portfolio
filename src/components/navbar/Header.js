import React, { useState } from 'react';
import { Button, Grid, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo1.png';
import message from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div style={{ background: 'rgb(13, 1, 33)', color: 'white' }}>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                py="20px"
                sx={{
                    position: 'fixed',
                    top: 0,
                    px: { md: '70px', xs: '10px' },
                    zIndex: 1,
                    backgroundColor: 'rgb(13, 1, 33)',
                }}
            >
                {/* Logo */}
                <Grid item xs={6} md={2}>
                    <Link to="home" smooth={true} duration={500} offset={-80}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{ height: '60px', cursor: 'pointer' }}
                        />
                    </Link>
                </Grid>

                {/* Desktop Nav */}
                <Grid
                    item
                    xs={0}
                    md={7}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        gap: 5,
                    }}
                >
                    <Link to="home" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link">
                        <Button sx={navBtnStyle}>Home</Button>
                    </Link>

                    <Link to="about" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link">
                        <Button sx={navBtnStyle}>About</Button>
                    </Link>

                    <Link to="experience" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link">
                        <Button sx={navBtnStyle}>Experience</Button>
                    </Link>

                    <Link to="project" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link">
                        <Button sx={navBtnStyle}>Projects</Button>
                    </Link>

                    <Link to="resume" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link">
                        <Button sx={navBtnStyle}>Resume</Button>
                    </Link>

                    <Link to="contact" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link">
                        <Button sx={navBtnStyle}>Contact</Button>
                    </Link>
                </Grid>

                {/* Contact Button (Desktop) */}
                <Grid
                    item
                    md={3}
                    sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
                >
                    <Link to="contact" smooth={true} duration={500} offset={-80}>
                        <Button
                            variant="contained"
                            sx={{
                                background: 'white',
                                color: 'black',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                textTransform: 'none',
                                padding: { xs: '6px 12px', md: '6px 16px' },
                                fontSize: { xs: '0.9rem', md: '1rem' },
                            }}
                        >
                            <img src={message} alt="message icon" style={{ width: 20, height: 20 }} />
                            Contact Me
                        </Button>
                    </Link>
                </Grid>

                {/* Mobile Menu Toggle */}
                <Grid
                    item
                    xs={6}
                    md={0}
                    sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}
                >
                    <IconButton
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{ color: 'white' }}
                    >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Grid>
            </Grid>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: 250,
                        backgroundColor: 'rgb(30,30,30)',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        paddingTop: 15,
                    },
                }}
            >
                <Link to="home" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link" onClick={() => setMobileOpen(false)}>
                    <Button sx={drawerBtnStyle}>Home</Button>
                </Link>

                <Link to="about" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link" onClick={() => setMobileOpen(false)}>
                    <Button sx={drawerBtnStyle}>About</Button>
                </Link>

                <Link to="experience" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link" onClick={() => setMobileOpen(false)}>
                    <Button sx={drawerBtnStyle}>Experience</Button>
                </Link>

                <Link to="projects" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link" onClick={() => setMobileOpen(false)}>
                    <Button sx={drawerBtnStyle}>Projects</Button>
                </Link>

                <Link to="resume" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link" onClick={() => setMobileOpen(false)}>
                    <Button sx={drawerBtnStyle}>Resume</Button>
                </Link>

                <Link to="contact" smooth={true} duration={500} offset={-80} spy={true} activeClass="active-link" onClick={() => setMobileOpen(false)}>
                    <Button sx={drawerBtnStyle}>Contact</Button>
                </Link>

                {/* Mobile Contact Button */}
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMobileOpen(false)}
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        variant="contained"
                        id="contact"
                        sx={{
                            background: 'white',
                            color: 'black',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            textTransform: 'none',
                            padding: '6px 16px',
                            width: '80%',
                            alignSelf: 'center',
                            mt: 3,
                            fontSize: '1rem',
                        }}
                    >
                        <img src={message} alt="message icon" style={{ width: 20, height: 20 }} />
                        Contact Now
                    </Button>
                </Link>
            </Drawer>
        </div>
    );
};

// Common Styles
const navBtnStyle = {
    color: 'white',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: { xs: '0.9rem', md: '1.125rem' },
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '0%',
        height: '3px',
        backgroundColor: 'yellow',
        transition: 'width 0.3s ease-in-out',
    },
    '&:hover::after': {
        width: '100%',
    },
    '&.active-link': {
        color: 'yellow',
        '&::after': { width: '100%' },
    },
};

const drawerBtnStyle = {
    color: 'white',
    textTransform: 'none',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    px: 3,
    py: 1.5,
    width: '100%',
    fontSize: '1rem',
    '&.active-link': {
        color: 'yellow',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
};

export default Header;
