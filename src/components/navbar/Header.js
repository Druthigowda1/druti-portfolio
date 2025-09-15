import React, { useState } from 'react';
import { Button, Grid, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo1.png';
import message from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { label: 'Home', to: 'home' },
        { label: 'About', to: 'about' },
        { label: 'Experience', to: 'Experience' },
        { label: 'Projects', to: 'Projects' },
    ];

    return (
        <div style={{ background: 'rgb(13, 1, 33)', color: 'white', }}>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                py="20px"
                sx={{
                    position: 'fixed',
                    top: 0,
                    px: { md: '70px', xs: '10px' },
                    zIndex: 1300,
                    backgroundColor: 'rgb(13, 1, 33)',
                }}
            >
                {/* Left Logo */}
                <Grid item xs={6} md={2}>
                    <img
                        src={logo}
                        alt="logo"
                        style={{ height: '60px', cursor: 'pointer' }}
                    />
                </Grid>

                {/* Desktop Nav Links */}
                <Grid
                    item
                    xs={0}
                    md={7}
                    sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 3 }}
                >
                    {links.map((link) => (
                        <Button
                            key={link.to}
                            sx={{
                                color: 'white',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                fontSize: { xs: '0.9rem', md: '1.125rem' }, // responsive font size
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
                            }}
                        >
                            <Link to={link.to} smooth={true} duration={500}>
                                {link.label}
                            </Link>
                        </Button>
                    ))}
                </Grid>

                {/* Right Contact Button (Desktop) */}
                <Grid
                    item
                    md={3}
                    sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
                >
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
                            fontSize: { xs: '0.9rem', md: '1rem' }, // responsive font size
                        }}
                    >
                        <img src={message} alt="message icon" style={{ width: 20, height: 20 }} />
                        Contact Me
                    </Button>
                </Grid>

                {/* Mobile Menu Icon */}
                <Grid
                    item
                    xs={6}
                    md={0}
                    sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}
                >
                    <IconButton
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{ color: 'white' }}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
                {/* Mobile Nav Links */}
                {links.map((link) => (
                    <Button
                        key={link.to}
                        component={Link}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        onClick={() => setMobileOpen(false)}
                        sx={{
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            justifyContent: 'flex-start',
                            px: 3,
                            py: 1.5,
                            width: '100%',
                            fontSize: '1rem', // slightly bigger on mobile drawer for tap targets
                        }}
                    >
                        {link.label}
                    </Button>
                ))}

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
                        padding: '6px 16px',
                        width: '80%',
                        alignSelf: 'center',
                        mt: 3,
                        fontSize: '1rem', // consistent size on mobile drawer
                    }}
                >
                    <img src={message} alt="message icon" style={{ width: 20, height: 20 }} />
                    Contact Now
                </Button>
            </Drawer>
        </div>
    );
};

export default Header;
