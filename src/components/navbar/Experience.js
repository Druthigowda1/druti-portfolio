import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import aboutImg from '../../assets/aboutme.png'; // Replace with your preferred image
import Stats from './Stats';

const Experience = () => {
    return (
        <Grid
            container
            id="experience"
            sx={{
                backgroundColor: 'rgb(13, 1, 33)',
                px: { md: 10, xs: 1, sm: 6 },
                py: { md: 2, xs: 4, sm: 2 },
                minHeight: { xs: '80vh', md: '70vh', sm: '70vh' },
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: -3, md: -6 }
            }}
        >
            {/* LEFT SIDE: Text Content */}
            <Grid item xs={12} md={7}>
                <Box sx={{ width: '100%' }}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'white',
                            fontWeight: 600,
                            fontFamily: 'inherit',
                            fontSize: { md: '3rem', xs: '2rem' },
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        Career Experience
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: 'lightgray',
                            fontFamily: 'inherit',
                            fontSize: { md: '1.3rem', xs: '0.95rem', sm: '1.3rem' },
                            lineHeight: 1.6,
                            textAlign: { xs: 'center', md: 'left' },
                            mt: 2,
                            mb: 4,
                        }}
                    >
                        I take pride in paying attention to the smallest details and ensuring every element of a website is both visually polished and functionally precise. From responsive layouts and intuitive navigation to performance optimization and accessibility, I strive to deliver pixel-perfect, user-friendly web experiences. I am passionate about combining clean code with creative design to build websites that not only look professional but also drive results.
                    </Typography>

                    {/* Experince as md={6} */}
                    <Grid container justifyContent={{ xs: 'center', md: 'flex-start' }}>
                        <Grid item xs={12} md={6} >
                            <Stats />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* RIGHT SIDE: Image */}
            <Grid item xs={12} md={5} sx={{ px: 5, display: 'flex', }}>
                <Box
                    component="img"
                    src={aboutImg}
                    alt="About Me"
                    sx={{
                        width: '90%',
                        height: '90%',
                        maxHeight: { xs: 300, md: 400, sm: 700 },
                        objectFit: 'cover',
                        borderRadius: 4,
                        mt: { xs: 4, md: 2, },
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default Experience;
