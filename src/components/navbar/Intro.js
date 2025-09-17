import { Grid, Typography, Button, Box } from '@mui/material';
import React from 'react';
import image from '../../assets/image21.png';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const Intro = () => {
    return (
        <Grid
            container
            sx={{
                position: 'relative',
                backgroundColor: 'rgb(13, 1, 33)',
                px: { md: 0, xs: 0 },
                mt: { md: 7, xs: 8 },
                height: { xs: '50vh', md: '90vh', sm: '60vh' },
                overflow: 'hidden',
                alignItems: 'stretch',  // Make children fill container height fully
            }}
        >

            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    position: { xs: 'relative', md: 'static' },
                    zIndex: 2,
                    color: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white text
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'left', md: 'flex-start' },
                    textAlign: { xs: 'left', md: 'left' },
                    px: { xs: 3, md: 10 },
                    height: '100%',
                    backgroundColor: { xs: 'rgba(0,0,0,0.1)', md: 'transparent' }, // lighter black overlay on mobile
                }}
            >

                <Typography variant="h5" sx={{ color: 'grey', mb: 1 }}>
                    Hello,
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        fontSize: { xs: '2.0rem', md: '3.75rem', sm: '3.05rem' },
                    }}
                >
                    I'm <span style={{ color: 'rgb(212, 175, 55' }}>Sahana NV</span>
                    <br />
                    Website Designer
                </Typography>
                <Typography
                    sx={{
                        mt: 2,
                        color: 'lightgray',
                        lineHeight: 2,
                        fontSize: { xs: '1rem', md: '1.125rem', sm: '1.8rem' },
                        maxWidth: { md: '500px' },
                    }}
                >
                    I am a skilled web designer with experience in creating
                    visually appealing and user-friendly websites.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 6,
                        color: 'black',
                        backgroundColor: 'white',
                        textTransform: 'none',
                        gap: 1,
                        fontSize: { xs: '1rem', md: 'large' },
                        borderRadius: '30px',
                        padding: '8px 20px',
                        '&:hover': {
                            backgroundColor: '#ed5345',
                            color: 'white',
                        },
                        alignItems: { xs: 'left', md: 'flex-start' },
                    }}
                >
                    <HomeRepairServiceIcon />
                    Hire Me
                </Button>
            </Grid>

            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    position: { xs: 'absolute', md: 'relative' },
                    top: 0,
                    left: 0,
                    width: { xs: '100%', md: 'auto' },
                    height: '100%',
                    zIndex: 2.3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.0)', // ✅ Light black background behind image
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt="Sahana NV"
                    sx={{
                        width: { xs: '100%', md: 450 },
                        mt: { xs: 0, md: 0, sm: 26 },
                        height: { xs: 'auto', md: 500, sm: 1000 },
                        maxHeight: { xs: '100%', md: '100%', sm: '180%' },
                        objectFit: 'cover',
                        filter: { xs: 'brightness(0.9)', md: 'none' },
                        borderRadius: { xs: 'none', md: '50%' },
                    }}
                />

            </Grid>

        </Grid>
    );
};

export default Intro;
